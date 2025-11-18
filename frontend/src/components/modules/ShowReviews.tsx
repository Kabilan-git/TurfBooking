"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Trophy } from "lucide-react";

export default function ShowReviews() {
  const testimonials = [
    {
      name: "Alice Johnson",
      img: "/player1.avif",
      review: "Amazing platform found a perfect turf for weekend matches",
      tags: ["Foot ball", "15+ games", "Advance"],
    },
    {
      name: "Bob Smith",
      img: "/player3.jpg",
      review: "Great experience booking turfs, very user-friendly",
      tags: ["Cricket", "10+ games", "Beginner"],
    },
    {
      name: "Emma Williams",
      img: "/player2.webp",
      review: "Amazing platform found a perfect turf for weekend matches",
      tags: ["Basketball", "10+ Games", "Intermediate"],
    },
    {
      name: "Ava Brown",
      img: "/player4.avif",
      review:
        "The turf conditions were excellent, and the staff was very helpful.",
      tags: ["Tennis", "5+ games", "Beginner"],
    },
    {
      name: "Liam Davis",
      img: "/player5.avif",
      review: "Booking was seamless, and the facilities were top-notch!",
      tags: ["Badminton", "20+ games", "Advance"],
    },
    {
      name: "Sophia Miller",
      img: "/player6.avif",
      review: "Had a fantastic time playing here, will definitely return.",
      tags: ["Volleyball", "15+ games", "Intermediate"],
    },
  ];

  return (
    <div className="w-full py-16 bg-[#f5fff5]">
      <h2 className="text-3xl text-center font-semibold text-green-700">
        What Our Players say
      </h2>
      <p className="text-center text-gray-500 mt-2">
        Join thousands of satisfied sports enthusiasts
      </p>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        className="mt-10 max-w-6xl mx-auto px-4"
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`rounded-2xl p-10 text-center transition-all duration-300 w-full h-[350px] ${
                  isActive
                    ? "bg-white shadow-2xl scale-105 opacity-100"
                    : "bg-white opacity-40 shadow scale-95"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />

                <h3 className="text-xl font-semibold mt-4 text-gray-700">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-3 line-clamp-3">{item.review}</p>

                {isActive && (
                  <div className="flex justify-center gap-3 mt-6 flex-wrap">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-2 whitespace-nowrap px-3 py-1 text-sm rounded-full border ${
                          i === 1
                            ? "bg-white text-green-600 border-green-300"
                            : i === 2
                            ? "bg-red-500 text-white border-red-400"
                            : "bg-green-500 text-white border-green-400"
                        }`}
                      >
                        <Trophy size={14} className="text-white-300 shrink-0" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination mt-6 flex justify-center"></div>
    </div>
  );
}
