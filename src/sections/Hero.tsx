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
      <p>Développeur web passionné, curieux et rigoureux, avec une première expérience réussie dans un environnement professionnel exigeant. À l’aise avec les technologies front-end et les outils de suivi de performance web, je combine esprit d’analyse, créativité et sens du détail pour proposer des solutions digitales efficaces et orientées utilisateur.</p>
      <ul className="flex flex-col space-y-2">
        <a href="https://www.linkedin.com/in/abel-sadia-0249841b5/" className="flex space-x-4 items-center">
          <Linkedin className="size-4"/>
          <span>Abel Sadia</span>
        </a>
        
        <a href="https://github.com/zarakikenpashi/" className="flex space-x-4 items-center">
          <Github className="size-4" />
          <span>github.com/zarakikenpashi/</span>
        </a>
        <a href="" className="flex space-x-4 items-center">
          <Mail className="size-4" />
          <span>sadiarog.abel@gmail.com</span>
        </a>
      </ul>
    </div>
  )
}

export default Hero