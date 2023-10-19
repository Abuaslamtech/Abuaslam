
const SkillsList = ({ImHtmlFive, desc}) => {
    return ( 
        <div className="flex flex-row w-full justify-center items-center gap-4 bg-bb py-2  pr-4 border-r border-secondary">
        <ImHtmlFive className="w-[30%] bg-secondary p-4 text-primary font-bold text-8xl" />
        <p className="w-[70%]">
          {desc}
        </p>
      </div>
     );
}
 
export default SkillsList;