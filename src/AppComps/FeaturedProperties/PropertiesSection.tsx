import { propertiesereal } from "../properties";
import { Deco } from "./FHeader";
import PCard from "./PCard2";

export const PropertiesSection2 = () => {
  // Create a reversed copy of the array
  const reversedProperties = [...propertiesereal].reverse();

  return (
    <div className="flex flex-col rounded-md py-10 lg:py-20 max-w-7xl mx-auto ">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-lg lg:text-3xl font-semibold text-gray-900 dark:text-gray-100">
          Discover Latest Properties
        </h1>
        <Deco />
        <p className="max-w-5xl p-4 lg:p-8 text-center text-gray-700 dark:text-gray-300">
          We work in real estate as channel partners, mainly dealing in
          residential projects like villas, kothis, flats, and commercial
          showrooms, plots, and agricultural land.
        </p>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {reversedProperties.map((item) => (
          <div key={item.type} className="">
            <PCard
              type={item.type}
              area={item.area}
              details={item.details}
              concept={item.concept}
              img={item.img}
              location={item.location}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
