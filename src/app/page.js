import { CarCard, CustomFilter, Searchbar, ShowMore } from "@/components";
import Hero from "@/components/Hero";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";


export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2024,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars)
  return (
    <main className=" overflow-hidden">
      <Hero/>
      <div className=" mt-12 padding-x padding-y max-width" id="discover">
        <div className=" home__text-container">
          <h1 className=" text-4xl font-extrabold">
              مجله خودرو ها
          </h1>
          <p>
            خودرویی که دوست دارید پیدا کنید !
          </p>
        </div>
        <div className=" home__filters">
            <Searchbar/>
          <div className=" home__filter-container"> 
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>خودرویی یافت نشد !!</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
