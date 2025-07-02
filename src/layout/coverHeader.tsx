import { Button } from "@/components/ui/button";
import { IMAGENS } from "@/utils/imagen";

export function CoverHeader(){
    return (
      <div>
        <div className="relative mt-8 md:hidden">
          <img
            src={IMAGENS.BackgroundClothers}
            className="w-full opacity-85"
            alt="BackgroundClothers"
          />
          <div className="absolute bottom-4 left-5  ">
            <div>
              <h2 className="font-bold text-[12px] mb-2 max-w-[95px] min-[470px]:text-sm min-[470px]:max-w-[120px] min-[600px]:text-lg min-[600px]:max-w-[150px]">
                50% off for clothing & shoes
              </h2>
              <Button className="bg-[#5DA96A] w-[62px] h-[25px] text-[10px] font-medium min-[600px]:w-[100px] min-[600px]:h-[35px]">
                Shop Now
              </Button>
            </div>
          </div>
        </div>

               {/* Screen +768  */}

        <div className="max-[768px]:hidden relative mt-8 max-w-[600px] mx-auto rounded-2xl overflow-hidden lg:max-w-[700px] xl:max-w-[1000px] lg:max-h-[240px]">
          <img
            src={IMAGENS.BackgroundClothers}
            className="w-full h-auto block"
            alt="BackgroundClothers"
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex flex-col justify-center p-12 lg:p-10">
            <h2 className="font-bold  text-4xl max-w-md md:text-xl md:max-w-[200px] lg:max-w-[220px] lg:text-2xl">
              50% off for clothing and shoes
            </h2>
            <Button className="bg-[#5DA96A] mt-6 py-3 px-8 md:py-1 md:px-4  md:text-sm rounded-lg self-start text-base font-semibold">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    );
}