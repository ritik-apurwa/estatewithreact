export const Deco = () => {
  return (
    <div className="max-w-50 items-center gap-x-2 flex flex-row my-4">
      <p className="font-bold">---------</p>
      <div className="border-teal-400 border-2 w-5 h-5 flex justify-center items-center">
        <div className="bg-teal-600 w-[6px] h-[6px] rotate-45"></div>
      </div>
      <p className="font-bold">----------</p>
    </div>
  );
};

export const FHeader = () => {
  return (
    <section className=" h-fit w-screen py-10 flex justify-center flex-col items-center">
      <h1 className="text-2xl lg:text-4xl text-center font-bold mb-4">
        Featured Properties
      </h1>
      <Deco />
      <p className="max-w-5xl p-8 lg:p-12 text-center text-lg lg:text-xl">
        Our top listing property for the client over all services for the client
        9 years
      </p>
    </section>
  );
};
