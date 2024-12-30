"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

import HeroImage from "../../Public/images/hero.png";

function Hero() {
  const handleScroll = () => {};
  return (
    <>
      <div className=" hero ">
        <div className=" flex-1 pt-36 padding-x">
          <h1 className=" hero__title">
            اجاره و رزرو بهترین خودرو ها - سریع و راحت !
          </h1>
          <p className=" hero__subtitle ">
            تجربه اجاره اتومبیل خود را با رزرو بی دردسر ما ساده کنید
          </p>
          <CustomButton
            title="ماشین ها را کاوش کنید"
            containerStyles=" text-primary-orange border-[#ff3b1f] border-2 font-bold rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>

        <div className=" hero__image-container">
          <div className=" hero__image">
            <Image
              src={HeroImage}
              fill
              alt="hero"
              className=" object-contain"
            />
          </div>
            <div className="hero__image-overlay" />
        </div>
      </div>
    </>
  );
}

export default Hero;
