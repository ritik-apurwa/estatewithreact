const Circle = () => {
  return (
    <div className="w-4 h-4 rounded-full border-4 border-sky-500 flex justify-center items-center " />
  );
};

interface LI {
  content: string;
}

const CustomLi = ({ content }: LI) => {
  return (
    <div className="flex relative   flex-row h-fit ">
      <span className="absolute  flex justify-center items-center max-h-10   w-10 h-full">
        <Circle />
      </span>
      <li className="pl-10  leading-10 font-semibold  text-base md:text-lg lg:text-xl">
        {content}
      </li>
    </div>
  );
};

const ServicesLi = () => {
  return (
    <div className=" py-20 flex   flex-col items-center   ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-4">
        Our Services
      </h1>
      <ul className="list-none   w-fit flex flex-col space-y-4 h-auto">
        <CustomLi content="We deal in real estate." />
        <CustomLi content="Working on commercial showroom projects." />
        <CustomLi content="Handling residential projects like villas and flats." />
      </ul>
    </div>
  );
};

export default ServicesLi;
