import { IconType } from "react-icons";

import {
  // Languages
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiCplusplus,

  // Frontend
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiTailwindcss,

  // Backend
  SiNodedotjs,
  SiExpress,
  SiFastapi,

  // AI / ML
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiHuggingface,

  // Database
  SiMysql,
  SiMongodb,
  SiPostgresql,

  // Tools
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiJupyter,

  // Testing
  SiSelenium,

  // Others
  SiFigma,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C", icon: SiC },
  { name: "C++", icon: SiCplusplus },

  // Frontend
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiTailwindcss },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // Backend
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "FastAPI", icon: SiFastapi },

  // AI / ML
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Hugging Face", icon: SiHuggingface },

  // Database
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },

  // Tools
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Jupyter", icon: SiJupyter },

  // Testing
  { name: "Selenium", icon: SiSelenium },

  // Design
  { name: "Figma", icon: SiFigma },
];