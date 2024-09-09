import React, {useState} from "react";

import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";




export function Questions() {

    const [openQuestion, setOpenQuestion] = useState(null);

    const toggleQuestion = (questionIndex) => {
        setOpenQuestion(openQuestion === questionIndex ? null : questionIndex);
    };

  return (
    <section className="flex-row">
        {/* first qestion */}
      <div className="flex justify-between ">
        
          <button onClick={() => toggleQuestion(1)} 
                  className=" flex justify-between items-center w-[100%] text-dark-purple font-semibold hover:text-purple">
            What is Frontend Mentor, and how will it help me?
            <img src={openQuestion === 1 ? iconMinus : iconPlus} alt="" className="ml-4" />
            
          </button>
         
      </div>
      <h1 className={`${openQuestion === 1 ? "flex" : "hidden"} max-w-[500px] text-light-purple col-span-2 font-variable`}>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </h1>
<div className="w-[90%] bg-light-pink h-[2px] mt-2 mb-2"></div>
      {/* second question  */}
      <div onClick={() => toggleQuestion(2)}
      className="flex justify-between ">
        
          <button className="flex justify-between items-center text-dark-purple w-[100%] font-semibold hover:text-purple">
            Is Frontend Mentor free?
            <img src={openQuestion === 2 ? iconMinus : iconPlus} alt="" className="ml-4" />
          </button>
         
      </div>
      <h1 className={`${openQuestion === 2 ? "flex" : "hidden"} max-w-[500px] text-light-purple col-span-2 font-variable`}>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </h1>
      <div className="w-[90%] bg-light-pink h-[2px] mt-2 mb-2"></div>
{/* third question */}
      <div className="flex justify-between ">
       
          <button onClick={() => toggleQuestion(3)}
          className=" flex justify-between items-center w-[100%] text-dark-purple font-semibold hover:text-purple">
            Can I use Frontend Mentor projects in my portfolio?
            <img src={openQuestion === 3 ? iconMinus : iconPlus} alt="" className="ml-4" />
          </button>
      </div>

      <h1 className={`${openQuestion === 3 ? "flex" : "hidden"} max-w-[500px] text-light-purple col-span-2 font-variable`}>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </h1>
      <div className="w-[90%] bg-light-pink h-[2px] mt-2 mb-2"></div>
{/* four question */}
      <div className="flex justify-between">
        
          <button onClick={() => toggleQuestion(4)}
          className=" flex justify-between items-center w-[100%] text-dark-purple font-semibold hover:text-purple">
            How can I get help if I'm stuck on a challenge?
            <img src={openQuestion === 4 ? iconMinus : iconPlus} alt="" className="ml-4" />
          </button>
        
      </div>
      <h1 className={`${openQuestion === 4 ? "flex" : "hidden"} max-w-[500px] text-light-purple col-span-2 font-variable`}>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </h1>
    </section>
  );
}
