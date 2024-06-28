import Image from "../../components/ui/Image";
import { Link } from "react-router-dom";
import banner from "../../data/media/banner.jpeg"

const Banner = () => {
  return (
    <section
      id="Banner"
      className="h-[calc(100svh-120px)] lg:h-[calc(100svh-150px)] max-w-7xl mx-auto grid lg:grid-cols-12 gap-4"
    >
      <div className="relative lg:col-span-7 items-center lg:row-span-12 row-span-5">
        <div className="flex justify-center items-center size-full">
          <Image src={banner} className="size-full"  alt="banner" />
        </div>
      </div>
      <div className="flex flex-col justify-start lg:justify-center lg:col-span-5   lg:row-span-12 row-span-7 e p-8 rounded-lg ">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">
            Maa Mansa Estate
          </h2>
          <p className="text-lg text-gray-700">
            We are a dedicated team of professionals with years of experience in
            the real estate industry, committed to providing exceptional service
            and guidance to our clients.
          </p>
        </div>
        <div className="flex justify-center">
          <Link to="#Properties">
            <span className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-500 transition duration-300 no-underline">
              See Properties
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
