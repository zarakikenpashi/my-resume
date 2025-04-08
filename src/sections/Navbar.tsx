import { ArrowDownToLine, Menu, X } from "lucide-react"
import { useState } from "react"
import Logo from "../components/Logo"

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <div className="h-[50px] rounded-full border-1 border-gray-200 flex justify-between items-center px-5 sticky top-0">
        <Logo />
        <button className="cursor-pointer shadow rounded-full p-1 lg:hidden" onClick={()=> setOpenNavbar(!openNavbar)}>
            { openNavbar ? <X className="text-gray-400 "/>  : <Menu className="text-gray-400 "/>}
        </button>
        <ul className={`absolute flex-col  top-[65px] left-0 right-0 bottom-0 px-5 z-10 ${openNavbar ? 'flex !bg-red-500' : 'hidden'}`}>
            <a href="" className="text-neutral-500 font-semibold border-b-2">Home</a>
            <a href="#projects" className="text-neutral-500 font-semibold">Projects</a>
            <a href="#works" className="text-neutral-500 font-semibold">Works</a>
        </ul>

        <ul className='hidden lg:flex bg-white px-5 space-x-4'>
            <a href="" className="text-neutral-500 font-semibold border-b-2 capitalize">à propos</a>
            <a href="#projects" className="text-neutral-500 font-semibold capitalize">Projets</a>
            <a href="#works" className="text-neutral-500 font-semibold capitalize">Expériences</a>
        </ul>
        <button className="flex items-center py-2 px-2.5 bg-gray-800 cursor-pointer text-white rounded-lg">
            <span>Télécharger</span>
            <ArrowDownToLine className="size-6" />
        </button>
    </div>
  )
}

export default Navbar