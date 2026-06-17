import type { ReactNode } from "react";

type AutoScrollRailProps<T> = {
  items: T[];
  threshold?: number;
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  className?: string;
  trackClassName?: string;
};

export default function AutoScrollRail<T>({
  items,
  threshold = 4,
  renderItem,
  getKey,
  className = "",
  trackClassName = "",
}: AutoScrollRailProps<T>) {
  const shouldAutoScroll = items.length > threshold;
  const visibleItems = shouldAutoScroll ? [...items, ...items] : items;

  return (
    <div className={`overflow-hidden py-8 ${className}`}>
      <div
        className={`flex ${shouldAutoScroll ? "w-max auto-scroll-track" : "flex-wrap justify-center"} ${trackClassName}`}
        style={
          shouldAutoScroll
            ? { animationDuration: `${Math.max(24, items.length * 6)}s` }
            : undefined
        }
      >
        {visibleItems.map((item, index) => {
          const originalIndex = index % items.length;
          const duplicationRound = Math.floor(index / items.length);

          return (
            <div key={`${getKey(item, originalIndex)}-${duplicationRound}`}>
              {renderItem(item, originalIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
