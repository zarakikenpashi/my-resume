import Htmls from "../components/icons/Htmls"
import CSSs from "../components/icons/CSSs"
import Tailwind from "../components/icons/Tailwind"
import React from "../components/icons/React"
import Laravel from "../components/icons/Laravel"
import Angular from "../components/icons/Angular"

const Skills = () => {
  return (
    <div className="px-5 pt-12">
      <h1 className="text-xl py-5 font-bold">Compétences</h1>
      <div className="flex flex-col space-y-4">
        <dl className="flex flex-col sm:flex-row gap-1">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500">Development:</span>
            </dt>
            <dd>
              <ul>
                <li className="me-4 after:content-[','] inline-flex items-center text-sm">
                <Htmls />
                HTML
                </li>
                <li className="me-4 after:content-[','] inline-flex items-center text-sm">
                  <CSSs />
                  CSS
                </li>
                <li className="me-4 after:content-[','] inline-flex items-center text-sm">
                  <Tailwind />
                  Tailwind CSS
                </li>

                <li className="me-4 after:content-[','] inline-flex items-center text-sm">
                  <React />
                  React
                </li>

                <li className="me-4 after:content-[','] inline-flex items-center text-sm">
                  <Angular />
                  Angular
                </li>

                <li className="me-4 inline-flex items-center text-sm">
                  <Laravel />
                  Laravel
                </li>
              </ul>
            </dd>
        </dl>
      </div>
    </div>
  )
}

export default Skills