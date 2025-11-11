"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MapPin, MoveRight } from "lucide-react";
import Calendar22 from "@/components/shared/datepicker";
import Dropdown from "@/components/shared/dropdown";

const SearchGround = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    console.log(date);
  };

  const [selectedValue, setSelectedValue] = useState<string>("");
  const handleSelectedValue = (value: string) => {
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <div className="min-h-max p-4 md:p-6 bg-white absolute rounded-xl">
      <div>
        <h1 className="text-[#317827] text-2xl font-semibold">
          Search your play ground
        </h1>
        <div className="flex items-center gap-5 mt-3 md:flex-row flex-col">
          <Input placeholder="Search location" className="md:max-w-max" />
          <Button
            className="btn text-neutral-900 bg-transparent border md:max-w-max w-sm"
            variant="default"
          >
            <MapPin />
            Near By
          </Button>
          <Calendar22 onDateSelect={handleDateSelect}></Calendar22>
          <Dropdown onSelectedValue={handleSelectedValue}></Dropdown>
          <Button className="btn bg-turf-green md:max-w-max">
            Find Turf
            <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchGround;
