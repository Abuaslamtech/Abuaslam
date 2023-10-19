import { ImHtmlFive } from "react-icons/im";
import { BiSolidFileCss } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import SkillsList from "./SkillsList";

const Core = () => {
  return (
    <div className="overflow-auto grid lg:grid-cols-2 pb-10 gap-6 w-full">
      <SkillsList
        ImHtmlFive={ImHtmlFive}
        desc="I am skilled in HTML, proficient in creating and structuring web content using this fundamental language."
      />
      <SkillsList
        ImHtmlFive={BiSolidFileCss}
        desc=" I have expertise in CSS, adept at designing visually appealing and responsive web interfaces."
      />
      <SkillsList
        ImHtmlFive={SiJavascript}
        desc="JavaScript is one of my core skills, enabling me to create dynamic and interactive web applications."
      />
    </div>
  );
};

export default Core;
