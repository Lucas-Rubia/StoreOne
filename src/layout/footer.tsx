import { IMAGENS } from "@/utils/imagen";
import { Mail, MapPin } from "lucide-react";

export function Footer(){
    return (
      <div className="bg-[#1A371F] w-full px-10 py-4 sm:flex-row sm:justify-between">
        <div className="flex gap-2 justify-center sm:order-1 ">
          <img src={IMAGENS.Logo} alt="Logo" />
          <p className="font-semibold text-xl text-white min-[1440px]:text-2xl">
            Store One
          </p>
        </div>

        <div className="mt-6 mb-5 space-y-4 text-center sm:order-3">
          <h1 className="font-semibold text-xl text-white min-[1440px]:text-2xl text-center">
            Contact
          </h1>
          <div className="flex gap-2 justify-center">
            <MapPin className="text-white size-12 md:size-8" />
            <p className="text-white">
              Professional Services Hub123 Main Street, Suite 456 New York, NY
              10001 USA
            </p>
          </div>
          <div className="flex gap-2 ml-1 justify-center">
            <Mail className="text-white size-5" />
            <p className="text-white">help@storeone.com</p>
          </div>
        </div>

        <div className="flex flex-col text-center sm:order-2 justify-center">
          <p className="mt-6 mb-5 text-white">Subscribe to Our NewsLetter</p>
          <div className="flex gap-4  mx-auto">
            <img src={IMAGENS.Facebook} className="size-6" alt="Facebook" />
            <img src={IMAGENS.Twitter} className="size-6" alt="Twitter" />
            <img src={IMAGENS.Instagram} className="size-6" alt="Instagram" />
            <img src={IMAGENS.Youtube} className="size-6" alt="Youtube" />
          </div>
        </div>
      </div>
    );
}


// px-16 py-9