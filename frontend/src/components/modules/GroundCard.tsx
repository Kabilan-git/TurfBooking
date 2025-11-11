"use client";
import Image from "next/image";

type Ground = {
  id: number;
  name: string;
  sport: string;
  location: string;
  distance: string;
  image: string;
  rating: number;
  reviews: number;
  facilities: string[];
  nextSlot: string;
  price: number;
};

export default function GroundCard({ ground }: { ground: Ground }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gray-100">
      {/* Image Section */}
      <div className="relative w-full h-48">
    <Image
      src={ground.image}
      alt={ground.name}
      fill
      className="object-cover rounded-t-2xl"
    />

        <div className="absolute top-2 right-2 flex items-center bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-sm shadow-sm">
          ⭐ <span className="ml-1 font-medium">{ground.rating}</span>
          <span className="text-gray-500 text-xs ml-1">({ground.reviews})</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div className="space-y-2">
          <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-md">
            {ground.sport}
          </span>

          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg text-gray-800 leading-snug">
              {ground.name}
            </h3>
            <button className="text-green-600 hover:text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                />
              </svg>
            </button>
          </div>

          <p className="text-gray-500 text-sm flex items-center gap-1">
            📍 {ground.location} <span className="text-xs">~{ground.distance}</span>
          </p>

          <div className="flex flex-wrap gap-2 mt-2 text-xs">
            {ground.facilities.map((f, i) => (
              <span
                key={i}
                className="border border-green-300 text-green-700 px-2 py-1 rounded-full"
              >
                {f}
              </span>
            ))}
          </div>

          <p className="text-gray-500 text-xs mt-2">⏰ Next slot @ {ground.nextSlot}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-green-600 font-semibold">${ground.price}/hr</p>
          <div className="flex gap-2">
            <button className="border border-gray-300 px-3 py-1 rounded-lg text-sm hover:bg-gray-50">
              + Create Team
            </button>
            <button className="bg-green-500 text-white px-4 py-1 rounded-lg text-sm hover:bg-green-600">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
