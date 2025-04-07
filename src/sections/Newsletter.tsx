import { ArrowRight, Mail } from "lucide-react"

const Newsletter = () => {
  return (
    <div className="px-5 pt-12">
      <h1 className="text-xl py-5">Subscribe</h1>
      <div className="flex items-center rounded-lg border-gray-200 border py-1 px-2 space-x-2">
        <Mail className="text-gray-400 size-4" />
        <input type="text" className="outline-none w-full" placeholder="Enter your email" />
        <button className="flex items-center py-2 px-2.5 bg-gray-800 cursor-pointer text-white rounded-md">
            <span>Join</span>
            <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Newsletter