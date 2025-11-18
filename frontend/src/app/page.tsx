import GroundCard from "@/components/modules/GroundCard";
import { grounds } from "@/data/grounds";

export default function Home() {
  return (
    <section className="py-10 bg-green-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-green-700">
            Our Popular Grounds
          </h2>
          <button className="text-gray-700 flex items-center gap-2">
            View all →
          </button>
         </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {grounds.map((ground) => (
              <GroundCard key={ground.id} ground={ground} />
              ))}
            </div>

      </div>
    </section>
import Hero from "@/components/modules/hero";
import ShowReviews from "@/components/modules/ShowReviews";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ShowReviews />
    </>
  );
}
