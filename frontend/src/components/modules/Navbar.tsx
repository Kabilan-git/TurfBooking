import SearchBar from "./SearchBar";
import { Moon, User } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        

        <div className="flex items-center gap-12">
          

          <div className="flex items-center gap-2">
            <div className="bg-green-500 text-white font-bold px-3 py-2 rounded-lg">
              TB
            </div>
            <span className="text-xl font-semibold text-black">TurfBook</span>
          </div>


          <div className="flex items-center gap-8 text-gray-700">
            <span className="px-4 py-1 bg-green-500 text-white rounded-xl font-semibold">
              Home
            </span>
            <span className="cursor-pointer hover:text-black font-medium">Find Turf</span>
            <span className="cursor-pointer hover:text-black font-medium">Find Team</span>
            <span className="cursor-pointer hover:text-black font-medium">My Account</span>
          </div>
        </div>



        <div className="flex items-center gap-6">
          <SearchBar />
          <Moon className="w-6 h-6 cursor-pointer text-gray-700" />
          <User className="w-6 h-6 cursor-pointer text-gray-700" />
        </div>

      </div>
    </div>
  );
}
