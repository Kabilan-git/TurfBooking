import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import SearchGround from "./search-ground";

const Hero = () => {
  return (
    <>
      <div>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "700px",
          }}
        >
          <Image
            src="/hero.jpg"
            alt="hero"
            layout="fill"
            objectFit="cover"
            className="brightness-50"
          ></Image>
          <div className="absolute inset-0 flex justify-center items-center flex-col gap-4">
            <h1 className="text-white text-6xl md:text-8xl">
              Find your perfect
            </h1>
            <span className="text-turf-green text-6xl md:text-8xl font-medium">
              Sports Turf
            </span>
            <span className="text-white text-xl max-w-sm md:max-w-screen font-light">
              Book premium sports facilities, connect with players, and elevate
              your game
            </span>
            <div className="action-btns space-x-5 mt-5">
              <Button className="btn p-6 text-white bg-transparent border border-white">
                Sign Up
              </Button>
              <Button className="btn p-6 bg-turf-green">Sign In</Button>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <SearchGround></SearchGround>
        </div>
      </div>
      {/* <Testimonial></Testimonial> */}
    </>
  );
};

export default Hero;
