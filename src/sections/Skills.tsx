import Figmas from "../components/icons/Figmas"
import Sketchs from "../components/icons/Sketchs"
import Htmls from "../components/icons/Htmls"
import CSSs from "../components/icons/CSSs"
import Tailwind from "../components/icons/Tailwind"
import React from "../components/icons/React"

const Skills = () => {
  return (
    <div className="px-5 pt-12">
      <h1 className="text-xl py-5">Skills</h1>
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-8 space-y-2 md:space-y-0  flex-wrap">
          <h1>Design Tools:</h1> 
          <div className="flex space-x-4 items-center">
            <div className="flex items-center">
              <Figmas />
              Figma, 
            </div>
            <div className="flex items-center">
              <Sketchs />
              Sketch 
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-8 space-y-2 md:space-y-0 flex-wrap">
          <h1>Development:</h1> 
          <div className="flex space-x-4 items-center flex-wrap">
            <div className="flex items-center">
              <Htmls />
              HTML, 
            </div>
            <div className="flex items-center">
              <CSSs />
              CSS, 
            </div>
            <div className="flex items-center">
              <Tailwind />
              Tailwind CSS, 
            </div>
            <div className="flex items-center">
              <React />
              React, 
            </div>
          </div>
          
        </div>










      </div>
    </div>
  )
}

export default Skills