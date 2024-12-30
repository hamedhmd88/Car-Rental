// export const calculateCarRent = (city_mpg, year) => {
//     const basePricePerDay = 50; // قیمت پایه اجاره روزانه به دلار
//     const mileageFactor = 0.1; // نرخ اضافی به ازای هر مایل پیموده شده
//     const ageFactor = 0.05; // نرخ اضافی به ازای هر سال سن خودرو
  
//     // محاسبه نرخ اضافی بر اساس مصرف سوخت و سن خودرو
//     const mileageRate = city_mpg * mileageFactor;
//     const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
//     // محاسبه نرخ کل اجاره روزانه
//     const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
//     return rentalRatePerDay.toFixed(0); // بازگرداندن نرخ به صورت عدد صحیح
//   };
  
//   export const updateSearchParams = (type, value) => {
//     // گرفتن پارامترهای جستجوی فعلی از URL
//     const searchParams = new URLSearchParams(window.location.search);
  
//     // تنظیم پارامتر جستجوی مشخص‌شده به مقدار داده شده
//     searchParams.set(type, value);
  
//     // ساختن URL جدید با پارامترهای جستجوی به‌روزشده
//     const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
//     return newPathname;
//   };
  
//   export const deleteSearchParams = (type) => {
//     // گرفتن پارامترهای جستجوی فعلی از URL
//     const newSearchParams = new URLSearchParams(window.location.search);
  
//     // حذف پارامتر جستجوی مشخص‌شده
//     newSearchParams.delete(type.toLocaleLowerCase());
  
//     // ساختن URL جدید با حذف پارامتر مشخص‌شده
//     const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
//     return newPathname;
//   };
  
//   export async function fetchCars(filters) {
//     const { manufacturer, year, model, limit, fuel } = filters;
  
//     // تنظیم هدرهای مورد نیاز برای درخواست به API
//     const headers = {
//       "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
//       "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//     };
  
//     // ارسال درخواست به API با فیلترهای مشخص‌شده
//     const response = await fetch(
//       `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
//       {
//         headers: headers,
//       }
//     );
  
//     // تجزیه پاسخ به فرمت JSON
//     const result = await response.json();
  
//     return result;
//   }
  
//   export const generateCarImageUrl = (car, angle) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     const { make, model, year } = car;
  
//     // افزودن پارامترهای جستجو به URL برای تولید تصویر خودرو
//     url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
//     url.searchParams.append('make', make);
//     url.searchParams.append('modelFamily', model.split(" ")[0]);
//     url.searchParams.append('zoomType', 'fullscreen');
//     url.searchParams.append('modelYear', `${year}`);
//     url.searchParams.append('angle', `${angle}`);
  
//     return `${url}`; // بازگرداندن URL کامل تصویر
//   };
  

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': 'KJwZZIJSFimshuiwMSVGaiYzkRomp15f2vKjsnk4bkzuUzvLza',
//         'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//     }
// };

// try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }


export async function fetchCars({ manufacturer, year, model, limit, fuel }) {
  // const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
      'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnk4bkzuUzVLzA',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  };

  const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
      headers: headers,
  });

  const result = await response.json();

  return result;
}

 export const calculateCarRent = (city_mpg, year) => {
     const basePricePerDay = 50; // قیمت پایه اجاره روزانه به دلار
     const mileageFactor = 0.1; // نرخ اضافی به ازای هر مایل پیموده شده
     const ageFactor = 0.05; // نرخ اضافی به ازای هر سال سن خودرو
  
     // محاسبه نرخ اضافی بر اساس مصرف سوخت و سن خودرو
     const mileageRate = city_mpg * mileageFactor;
     const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
     // محاسبه نرخ کل اجاره روزانه
     const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
     return rentalRatePerDay.toFixed(0); // بازگرداندن نرخ به صورت عدد صحیح
   };


     export const generateCarImageUrl = (car, angle) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, model, year } = car;
  
    // افزودن پارامترهای جستجو به URL برای تولید تصویر خودرو
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(" ")[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
  
    return `${url}`; // بازگرداندن URL کامل تصویر
  };


    export const updateSearchParams = (type, value) => {
    // گرفتن پارامترهای جستجوی فعلی از URL
    const searchParams = new URLSearchParams(window.location.search);
  
    // تنظیم پارامتر جستجوی مشخص‌شده به مقدار داده شده
    searchParams.set(type, value);
  
    // ساختن URL جدید با پارامترهای جستجوی به‌روزشده
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };

  export const deleteSearchParams = (type) => {
    // Set the specified search parameter to the given value
    const newSearchParams = new URLSearchParams(window.location.search);
  
    // Delete the specified search parameter
    newSearchParams.delete(type.toLocaleLowerCase());
  
    // Construct the updated URL pathname with the deleted search parameter
    const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;
  
    return newPathname;
  };