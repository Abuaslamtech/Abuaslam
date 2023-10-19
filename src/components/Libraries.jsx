import SkillsList from "../components/SkillsList";
import { GrReactjs } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const Libraries = () => {
  return (
    <div className="grid lg:grid-cols-2  gap-6 w-full">
      <SkillsList
        ImHtmlFive={GrReactjs}
        desc="I'm proficient in React, harnessing its capabilities to build  web applications."
      />
      <SkillsList
        ImHtmlFive={FaBootstrap}
        desc=" I have proficiency in Bootstrap, utilizing it to create mobile-friendly web interfaces."
      />
      <SkillsList
        ImHtmlFive={SiTailwindcss}
        desc="I harness Tailwind utility-first approach to streamline web development."
      />
      <SkillsList
        ImHtmlFive={SiFirebase}
        desc="I utilize Firebase's cloud-based services for real-time databases and authentication."
      />
    </div>
  );
};

export default Libraries;
