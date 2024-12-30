"use client";

import { useRouter } from "next/navigation";

import { updateSearchParams } from "@/utils";
import { CustomButton } from ".";


function ShowMore({ pageNumber, isNext }) {
  const router = useRouter();

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
  };
  return (
    <>
      <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="دیدن بیشتر خودرو ها"
          containerStyles="bg-primary-orange rounded-full text-gray-300 font-bold"
          handleClick={handleNavigation}
        />
      )}
    </div>
    </>
  )
}

export default ShowMore
