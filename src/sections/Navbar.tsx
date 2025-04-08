import { ArrowDownToLine, Menu, X } from "lucide-react"
import { useState } from "react"
import cv from "/files/CV-ABELSADIA.pdf"
const links = [
    {
        id:1,
        title: "à propos",
        href: "#about",
        active:true
    },
    {
        id:2,
        title: "projets",
        href: "#projects",
        active:false
    },
    {
        id:3,
        title: "expériences",
        href: "#works",
        active:false
    }
]
const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <div className="h-[50px] rounded-full border-1 border-gray-200 flex justify-between items-center px-5 sticky top-0">
        
        <h1 className="font-bold text-lg">Magix</h1>
        <button className="cursor-pointer shadow rounded-full p-1 xl:hidden" onClick={()=> setOpenNavbar(!openNavbar)}>
            { openNavbar ? <X className="text-gray-400 "/>  : <Menu className="text-gray-400 "/>}
        </button>
        <ul 
            className={`absolute flex-col top-[50px] left-0 w-full -min-h-screen p-5 z-10 bg-white space-y-6 ${openNavbar ? 'flex' : 'hidden'}`}
        >
            <a href="#profil" className="text-neutral-500 font-semibold border-b-2">Home</a>
            <a href="#projects" className="text-neutral-500 font-semibold">Projects</a>
            <a href="#works" className="text-neutral-500 font-semibold">Works</a>
            <a 
                className="flex items-center w-32 py-2 px-2.5 bg-gray-800 cursor-pointer text-white rounded-lg"
                download
                href={cv}
            >
                <span>Télécharger</span>
                <ArrowDownToLine className="size-6" />
            </a>
        </ul>

        <NavLinks />
        <a 
            className="hidden xl:flex items-center py-2 px-2.5 bg-gray-800 cursor-pointer text-white rounded-lg" 
            download
            href={cv}
        >
            <span>Télécharger</span>
            <ArrowDownToLine className="size-6" />
        </a>
    </div>
  )
}
const NavLinks = () => {
    return (
        <ul className='hidden xl:flex bg-white px-5 space-x-4'>
            {
                links.map((link, index) => (
                    <Link title={link.title} href={link.href} active={link.active} key={index}   />
                ) )
            }
        </ul>
    )
}

const Link = ({title,href,active}:{title:string,href:string,active:boolean}) => {
    return (
        <a 
            href={href} 
            className={`${active ? 'text-neutral-800 border-b' : ''} text-neutral-500 font-semibold capitalize hover:text-neutral-800 hover:border-b transition-all duration-300`}
        >
            {title}
        </a>
    )
}
export default Navbar