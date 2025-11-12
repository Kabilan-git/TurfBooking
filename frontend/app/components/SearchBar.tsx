"use client";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 bg-white border rounded-xl px-4 py-2 w-80 shadow-sm">
      <Search className="w-5 h-5 text-gray-500"  />
      <input
        type="text"
        placeholder="Search for turfs"
        className="w-full outline-none text-gray-700" 
      />
    </div>
  );
}