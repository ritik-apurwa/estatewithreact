import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "../../components/ui/Image";
import { Link } from "react-router-dom";
import Logo from "../../data/media/LogoNew.png"

const Footer = () => {
  const cities = ["Mumbai", "Mohali", "Delhi", "Lucknow", "Rajasthan"];
  const facilities = [
    "Bathrooms",
    "Bedrooms",
    "Parking",
    "Near Locations",
    "Rich Facilities",
  ];
  const socials = [
    { id: 1, icon: FaFacebook, link: "https://www.facebook.com" },
    { id: 2, icon: FaWhatsapp, link: "tel:8545412674" },
    { id: 3, icon: FaInstagram, link: "https://www.instagram.com/star.insta" },
    { id: 4, icon: FaFacebook, link: "https://www.facebook.com/star.facebook" },
    { id: 5, icon: FaYoutube, link: "https://www.youtube.com/stat.Youtube" },
  ];
  const quickLinks = [
    { id: 1, name: "Home", link: "#Banner" },
    { id: 2, name: "Properties", link: "#Properties" },
    { id: 3, name: "Services", link: "#Service" },
    { id: 4, name: "About", link: "#About" },
    { id: 5, name: "Contact", link: "#Contact" },
  ];

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 flex flex-col items-center md:items-start">
          <Image src={Logo} alt="logo" className="rounded-full" />
          <h1 className="text-2xl font-bold mt-4">MAA MANSA ESTATE </h1>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.link}>
                  <span className="hover:underline">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Top Cities</h2>
          <ul className="space-y-2">
            {cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-4">Facilities</h2>
          <ul className="space-y-2 flex justify-center flex-col items-center">
            {facilities.map((facility, index) => (
              <li key={index}>{facility}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="https://wingstarnarketing.com"
              className="text-xs hover:underline"
            >
              © 2024 startmarketing.com All rights reserved.
            </Link>
          </div>
          <div className="flex space-x-4">
            {socials.map((social) => (
              <Link to={social.link} key={social.id}>
                <span
                  rel="noopener noreferrer"
                  className="text-xl hover:text-primary"
                >
                  <social.icon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
