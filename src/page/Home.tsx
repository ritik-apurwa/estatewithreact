import Banner from "../AppComps/Banner/Banner";
import { FHeader } from "../AppComps/FeaturedProperties/FHeader";
import { PropertiesSection2 } from "../AppComps/FeaturedProperties/PropertiesSection";
import ServicesLi from "../AppComps/Services/ServicesLi";
import ContactUs from "../AppComps/ContactUs/ContactUs";

export default function Home() {
  return (
    <section>
      <section id="Banner" className="">
        <Banner />
      </section>

      <section id="Header" className="bg-gradient-light-2">
        <FHeader />
      </section>
      <section id="Properties" className="bg-gradient-light-1">
        <PropertiesSection2 />
      </section>
      <section id="Services" className="bg-gradient-light-3">
        <ServicesLi />
      </section>
      <section id="Contact" className="w-screen items-center justify-center flex bg-gradient-light-4 min-h-screen">
        <ContactUs />
      </section>
    </section>
  );
}
