"use client";

import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import steeringwheel from "../../Public/images/steering-wheel.svg";
import tire from "../../Public/images/tire.svg";
import gas from "../../Public/images/gas.svg";
import rightarrow from "../../Public/images/right-arrow.svg";
import CustomButton from "./CustomButton";
import { useState } from "react";
import CarDetails from "./CarDetails";

function CarCard({ car }) {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <>
      <div className=" car-card group">
        <div className=" car-card__content">
          <h2 className=" car-card__content-title mr-auto">
            {make} {model}
          </h2>
        </div>

        <p className=" flex gap-1  mr-auto text-left mt-6 text-[32px] font-extrabold">
          <span className=" self-end text-[14px] font-medium">day/</span>
          {carRent}
          <span className=" self-start text-[14px] font-semibold">$</span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
        </div>

        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between  text-gray-300">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src={steeringwheel}
                width={20}
                height={20}
                alt="steering wheel"
              />
              <p className="text-[14px] leading-[17px]">
                {transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="car-card__icon">
              <Image src={tire} width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{drive.toUpperCase()}</p>
            </div>
            <div className="car-card__icon">
              <Image src={gas} width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{city_mpg} MPG</p>
            </div>
          </div>
          <div className="car-card__btn-container">
            <CustomButton
              title="تماشا بیشتر"
              containerStyles="w-full py-[16px] rounded-full bg-primary-orange"
              textStyles="text-white text-[14px] leading-[17px] font-bold"
              rightIcon={rightarrow}
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        <CarDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          car={car}
        />
      </div>
    </>
  );
}

export default CarCard;
