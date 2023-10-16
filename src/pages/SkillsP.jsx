import { Routes, Route } from "react-router-dom";
import Core from "../components/Core";
import Libraries from "../components/Libraries";
import Versions from "../components/Versions";

const SkillsP = () => {
  return (
    <Routes>
      <Route exact path="/skills/core" element={<Core />}></Route>
      <Route exact path="/skills/libraries" element={<Libraries />}></Route>
      <Route exact path="/skills/versions" element={<Versions />}></Route>
    </Routes>
  );
};

export default SkillsP;
