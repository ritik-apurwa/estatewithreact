import { LazyLoadImage } from "react-lazy-load-image-component";
import { cn } from "../../lib/utils";

interface ImageProps {
  src: string;
  alt: string;
  height?: string;
  width?: string;
  className: string;
}

const Image = ({ alt, className, height, src, width }: ImageProps) => {
 
  return (
    <section>
      <LazyLoadImage
        height={height || "100"} // Default height to "100" if not provided
        width={width || "100"}   // Default width to "100" if not provided
        src={src}
        className={cn("", className)}
        alt={alt}      // Default alt to "home" if not provided
      />
    </section>
  );
};

export default Image;
