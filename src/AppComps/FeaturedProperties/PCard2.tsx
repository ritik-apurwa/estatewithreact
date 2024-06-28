import { PiMapPinArea } from "react-icons/pi";
import { TbChartAreaLine } from "react-icons/tb";
import { Sheet, SheetContent, SheetTrigger } from "../../components/ui/sheet";
import Image from "../../components/ui/Image";
import { PropertyRProps } from "../properties";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PCard({
  area,
  concept,
  img,
  location,
  type,
  details,
}: PropertyRProps) {
  return (
    <section className="bg-white p-2 m-2  flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="relative  flex items-center justify-center h-60  ">
        <Sheet>
          <SheetTrigger asChild className=" overflow-hidden ">
           <div className=" relative w-full p-2">
           <div className=" rounded-md relative w-full   h-60 overflow-hidden">
              <LazyLoadImage
                src={img}
                alt={type}
                height={100}
                width={100}
                loading="eager"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-60 z-20 w-auto object-contain"
              />
              <div className="absolute w-full ">
                <LazyLoadImage
                  src={img}
                  alt={type}
                  height={550}
                  width={660}
                  effect="blur"
                  loading="eager"
                  className=" w-full object-center object-cover h-60"
                />
              </div>
            </div>
           </div>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="w-screen max-w-5xl bg-black/20 border-black h-[80vh] pt-20 m-auto inset-0  "
          >
            <div className="w-full  max-w-[99%] bg-black/20 max-h-full overflow-auto ">
              <Image src={img} alt={type} className="aspect-auto w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="px-4  flex flex-col font-serif justify-between">
        <h1 className="text-2xl font-lato  font-semibold my-1">{type}</h1>
        <div className="text-xs mb-4 w-fit bg-red-500/40 px-3 rounded-md">
          {concept}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {details.map((detail: string, index: number) => (
            <span
              key={index}
              className="bg-green-600/60 text-black font-semibold px-2 py-1 rounded-lg text-xs"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-between px-4  text-sm gap-1  w-full">
        <div className="flex  font-semibold py-3 justify-center flex-row items-center gap-x-1">
          <PiMapPinArea className="text-base" />
          {location}
        </div>
        <div className="flex  font-semibold py-3 justify-center flex-row items-center gap-x-1">
          <TbChartAreaLine className="text-base" />
          <span>{area}</span>
        </div>
      </div>
    </section>
  );
}
