import { IconType } from "react-icons";
import { MdAlignHorizontalCenter, MdMessage } from "react-icons/md";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { GrSend } from "react-icons/gr";


interface Social {
  icon: IconType;
  label: string;
}

const Social = ({ icon, label }: Social) => {
  const Icon = icon;
  return (
    <section className="flex flex-row gap-x-2 w-full justify-start items-center p-4 ">
      <span className="text-xl text-teal-400 font-bold">
        <Icon />
      </span>
      <span className="text-sm font-bold">{label}</span>
    </section>
  );
};

const ContactUs = () => {
  return (
    <div className=" flex items-center max-w-7xl mx-auto justify-center p-2 py-10 lg:py-12 prose prose-lg prose-headings:my-2 prose-p:p-4 ">
      <div className="bg-background rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 md:w-1/2 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
              <p className="text-lg mb-4">
                We love to hear from you. Send us a message and we ll respond as
                soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MdAlignHorizontalCenter className="w-6 h-6" />
                <span>maamansaestate@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MdMessage className="w-6 h-6" />
                <span>+91 9877699340</span>
              </div>
            </div>
          </div>
          <form className="p-8 md:w-1/2 space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  className="w-full"
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  className="w-full"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                className="w-full"
              />
            </div>
            <div className="">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                className="w-full h-32"
              />
            </div>

            <button className="w-full flex flex-row items-center bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
              <GrSend className="w-5 h-5 mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
