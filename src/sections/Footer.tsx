import { Moon } from "lucide-react"

const Footer = () => {
  return (
    <div className="px-5 pt-12">
      <div className="border-gray-200 border-t-1 py-5 flex justify-between items-center">
        <a href="#" className="text-gray-600 text-sm">© 2025 Preline Labs.</a>
        <ul className="flex space-x-4 items-center">
          <a href="#" className="text-gray-600 text-sm">Youtube</a>
          <a href="#" className="text-gray-600 text-sm">Github</a>
          <button className="cursor-pointer rounded-full p-1 border-gray-200 border hover:bg-gray-200">
            <Moon className="text-gray-400 size-4"/>
        </button>
        </ul>
      </div>
    </div>
  )
}

export default Footer