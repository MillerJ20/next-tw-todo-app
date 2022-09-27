import Image from "next/image";
import spaceTime from "../public/spaceTime.jpg";
import { AddTaskButton } from "./AddTaskButton";

export const Navbar = () => {
  return (
    <div className="fixed h-24 w-screen flex flex-row align-middle border-2 rounded-sm bg-gradient-to-r from-orange-100 to-purple-300 shadow-l hover:shadow-xl transition-all duration-200 ease-linear">
      <div className="h-20 w-20 relative mx-2 my-auto">
        <Image
          alt="SpaceTime Logo"
          src={spaceTime}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="my-auto test-xl uppercase text-orange-600-contrast font-bold tracking-widest">
        SPACETODO
      </div>
      <div className="flex ml-auto mr-6">
        <AddTaskButton />
      </div>
    </div>
  );
};
