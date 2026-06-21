"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type AutoScrollRailProps<T> = {
  items: T[];
  threshold?: number;
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  className?: string;
  trackClassName?: string;
};

const COPIES = 3;
const PX_PER_SEC = 50;
const DRAG_THRESHOLD = 4;
const FLICK_DISTANCE_MULTIPLIER = 450;
const FLICK_DURATION = 450;

export default function AutoScrollRail<T>({
  items,
  threshold = 4,
  renderItem,
  getKey,
  className = "",
  trackClassName = "",
}: AutoScrollRailProps<T>) {
  const shouldLoop = items.length > threshold;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const flickRafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isWritingRef = useRef(false);
  const isPausedRef = useRef(false);

  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragScrollStartRef = useRef(0);
  const velocityRef = useRef(0);
  const prevXRef = useRef(0);
  const prevTimeRef = useRef(0);

  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  const singleWidth = () =>
    trackRef.current ? trackRef.current.scrollWidth / COPIES : 0;

  const normalize = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp || !shouldLoop || isWritingRef.current) return;
    const sw = singleWidth();
    if (sw <= 0) return;
    isWritingRef.current = true;
    if (vp.scrollLeft < sw * 0.5) vp.scrollLeft += sw;
    else if (vp.scrollLeft > sw * 1.5) vp.scrollLeft -= sw;
    isWritingRef.current = false;
  }, [shouldLoop]);

  // Seed scroll position to middle copy before first paint
  useLayoutEffect(() => {
    if (!shouldLoop) return;
    const vp = viewportRef.current;
    const tr = trackRef.current;
    if (!vp || !tr) return;
    vp.scrollLeft = tr.scrollWidth / COPIES;
  }, [shouldLoop, items.length]);

  // rAF auto-scroll — pauses on hover or touch
  useEffect(() => {
    if (!shouldLoop || isPaused || isTouching) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    const tick = (t: DOMHighResTimeStamp) => {
      if (!lastTimeRef.current) lastTimeRef.current = t;
      const dt = Math.min(t - lastTimeRef.current, 50);
      lastTimeRef.current = t;
      const vp = viewportRef.current;
      if (vp) {
        isWritingRef.current = true;
        vp.scrollLeft += (PX_PER_SEC * dt) / 1000;
        isWritingRef.current = false;
        normalize();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [shouldLoop, isPaused, isTouching, normalize]);

  // Non-passive wheel/trackpad handler so preventDefault works
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp || !shouldLoop) return;

    const onWheel = (e: WheelEvent) => {
      if (!isPausedRef.current) return;
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (!d) return;
      e.preventDefault();
      if (flickRafRef.current) {
        cancelAnimationFrame(flickRafRef.current);
        flickRafRef.current = null;
      }
      isWritingRef.current = true;
      vp.scrollLeft += d;
      isWritingRef.current = false;
      normalize();
    };

    vp.addEventListener("wheel", onWheel, { passive: false });
    return () => vp.removeEventListener("wheel", onWheel);
  }, [shouldLoop, normalize]);

  const cancelFlick = () => {
    if (flickRafRef.current) {
      cancelAnimationFrame(flickRafRef.current);
      flickRafRef.current = null;
    }
  };

  const launchFlick = (vp: HTMLDivElement) => {
    const v = velocityRef.current;
    if (Math.abs(v) < 0.05) return;
    cancelFlick();
    const s0 = vp.scrollLeft;
    const dist = -v * FLICK_DISTANCE_MULTIPLIER;
    const t0 = performance.now();
    const step = (t: DOMHighResTimeStamp) => {
      const p = Math.min((t - t0) / FLICK_DURATION, 1);
      const ease = 1 - (1 - p) ** 3;
      isWritingRef.current = true;
      vp.scrollLeft = s0 + dist * ease;
      isWritingRef.current = false;
      normalize();
      if (p < 1) flickRafRef.current = requestAnimationFrame(step);
      else flickRafRef.current = null;
    };
    flickRafRef.current = requestAnimationFrame(step);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!shouldLoop || e.pointerType === "touch" || e.button !== 0) return;
    const vp = viewportRef.current;
    if (!vp) return;
    cancelFlick();
    pointerIdRef.current = e.pointerId;
    dragStartXRef.current = e.clientX;
    dragScrollStartRef.current = vp.scrollLeft;
    prevXRef.current = e.clientX;
    prevTimeRef.current = e.timeStamp;
    velocityRef.current = 0;
    vp.setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    const vp = viewportRef.current;
    if (!vp) return;
    const dx = e.clientX - dragStartXRef.current;
    if (!isDragging && Math.abs(dx) >= DRAG_THRESHOLD) setIsDragging(true);
    const dt = Math.max(1, e.timeStamp - prevTimeRef.current);
    velocityRef.current = (e.clientX - prevXRef.current) / dt;
    prevXRef.current = e.clientX;
    prevTimeRef.current = e.timeStamp;
    isWritingRef.current = true;
    vp.scrollLeft = dragScrollStartRef.current - dx;
    isWritingRef.current = false;
    normalize();
  };

  const onPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (pointerIdRef.current !== e.pointerId) return;
    const vp = viewportRef.current;
    vp?.releasePointerCapture(e.pointerId);
    pointerIdRef.current = null;
    setIsDragging(false);
    if (vp) launchFlick(vp);
  };

  const onScroll = () => {
    if (isWritingRef.current) return;
    normalize();
  };

  if (!shouldLoop) {
    return (
      <div className={`pt-8 pb-14 ${className}`}>
        <div className={`flex flex-wrap justify-center ${trackClassName}`}>
          {items.map((item, i) => (
            <div key={getKey(item, i)}>{renderItem(item, i)}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-x-hidden overflow-y-visible ${className}`}
      onMouseEnter={() => {
        cancelFlick();
        setIsPaused(true);
      }}
      onMouseLeave={() => {
        cancelFlick();
        lastTimeRef.current = null;
        pointerIdRef.current = null;
        setIsDragging(false);
        setIsPaused(false);
      }}
    >
      <div
        ref={viewportRef}
        className={`no-scrollbar overflow-x-auto overflow-y-visible overscroll-x-contain pt-8 pb-14 ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onPointerLeave={onPointerEnd}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => {
          setIsTouching(false);
          lastTimeRef.current = null;
        }}
        onTouchCancel={() => {
          setIsTouching(false);
          lastTimeRef.current = null;
        }}
      >
        <div
          ref={trackRef}
          className={`flex w-max items-stretch ${trackClassName}`}
        >
          {Array.from({ length: COPIES }, (_, ci) =>
            items.map((item, ii) => (
              <div key={`${getKey(item, ii)}-${ci}`} className="shrink-0 select-none">
                {renderItem(item, ii)}
              </div>
            )),
          ).flat()}
        </div>
      </div>
    </div>
  );
}
