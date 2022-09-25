import Image from "next/image"
import spaceTime from '../public/spaceTime.jpg'

export const Navbar = () => {
  return (
    <div className="fixed before:h-24 w-screen flex flex-row align-middle border-2 rounded-sm bg-slate-100 shadow-xl">
      <div className="h-20 w-20 relative mx-2 my-auto">
        <Image alt='SpaceTime Logo' src={spaceTime} layout='fill' objectFit="cover" className="rounded-full"/>
      </div>
      <div className="my-auto test-xl uppercase text-pink-400 font-bold tracking-widest">
        SPACETODO 
      </div>
      <div className="flex ml-auto mr-6 ">
        <button className="bg-gray-200 hover:bg-sky-400 text-slate-700 hover:text-white my-auto py-3 px-3 rounded-md hover:rounded-xl rounded-3xl
          transition-all duration-200 ease-linear
          cursor-pointer shadow-lg">
          Add Task
        </button>
      </div>
    </div>
  )
}
