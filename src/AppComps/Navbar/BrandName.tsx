import Logo from "../../data/media/LogoNew.png"
import { Link } from "react-router-dom";
import Image from "../../components/ui/Image";


const BrandName = () => {
  return (
    <Link to="/" className="flex flex-row items-center justify-between">

      <div className="flex justify-start bg-background items-center px-2">
        <Image src={Logo}  className=" size-14 " alt="Logo" />
      </div>

      <h1 className="flex justify-center items-center font-bold text-base">
        Maa Mansa Estate
      </h1>
    </Link>
  );
};

export default BrandName;
