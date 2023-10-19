import SkillsList from "../components/SkillsList";

import {BsGit} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";

const Versions = () => {
  return (
    <div className=" pb-10 grid lg:grid-cols-2 gap-6 w-full overflow-auto">
          <SkillsList ImHtmlFive={BsGit}  desc="I'm experienced with Git, using its version control system to manage and track code changes."/>
      <SkillsList ImHtmlFive={AiFillGithub} desc="I' use platform for version control, collaboration, and code sharing."/>
    </div>
  );
};

export default Versions;
