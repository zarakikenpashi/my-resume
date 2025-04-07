import { Github, Linkedin, Mail } from "lucide-react"
import  profil  from "../../public/images/profil.png"

const Hero = () => {
  return (
    <div className="flex flex-col space-y-4 px-5 pt-12">
      <div className="flex items-center space-x-2">
        <img 
          src={profil} 
          alt="" 
          className="size-16 rounded-full" 
        />
        <div>
          <h1 className="text-bold text-2xl uppercase">Sadia Abel Rogellin</h1>
          <p>Developpeur web</p>
        </div>
      </div>
      <p>I am a seasoned graphic designer with over 14 years of experience in creating visually appealing and user-centric designs. My expertise spans across UI design, design systems, and custom illustrations, helping clients bring their digital visions to life.</p>
      <p>Currently, I work remotely for Notion, where I design template UIs, convert them into HTML and CSS, and provide comprehensive support to our users. I am passionate about crafting elegant and functional designs that enhance user experiences.</p>
      <ul className="flex flex-col space-y-2">
        <a href="" className="flex space-x-4">
          <Linkedin />
          <span>elianagarcia997@about.me</span>
        </a>
        <a href="" className="flex space-x-4">
          <Github />
          <span>@elianagarcia997</span>
        </a>
        <a href="" className="flex space-x-4">
          <Mail />
          <span>@elianagarcia997</span>
        </a>
      </ul>
    </div>
  )
}

export default Hero