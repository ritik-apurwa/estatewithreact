import BrandName from "./BrandName";

const Navbar = () => {
  return (
    <div className="flex flex-row px-2 lg:px-3 items-center justify-between  mx-auto max-w-7xl py-2 lg:py-4">
      <BrandName />
    </div>
  );
};

export default Navbar;
