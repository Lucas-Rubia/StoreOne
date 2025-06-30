
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { IMAGENS } from "../utils/imagen";

export function Header() {
    return (
      <>
        <header className="md:hidden">
          <div className="flex items-center justify-between gap-4 py-5 px-2.5">
            <div className="flex items-center gap-2">
              <img src={IMAGENS.Logo} alt="LogoStoreOne" />
              <p className="font-semibold text-xl">Store One</p>
            </div>
            <div className="flex items-center gap-4">
              <Search />
              <div className="relative">
                <ShoppingCart />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
              </div>
            </div>
          </div>

          <div className="flex justify-center p-2.5 gap-4">
            <img
              src={IMAGENS.ImageProfile}
              className="size-12 min-[425px]:size-14 "
              alt="ImageProfile"
            />
            <div>
              <h3 className="font-semibold min-[400px]:text-xl min-[425px]:text-2xl">
                Hi, Roberts Adams
              </h3>
              <p className=" min-[425px]:text-lg">Let's go shopping</p>
            </div>
          </div>

          <div className="relative mt-8 ">
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
        </header>

        {/* Screen +768  */}

        <header className="max-[768px]:hidden md:flex justify-between items-center max-w-[900px] mx-auto min-[1440px]:max-w-[1100px]">
          <div className="flex items-center gap-2">
            <img src={IMAGENS.Logo} alt="LogoStoreOne" />
            <p className="font-semibold text-xl min-[1440px]:text-2xl">
              Store One
            </p>
          </div>
          <DropdownMenu>
            <div>
              <Button
                variant="ghost"
                className="font-bold text-[#5DA96A] min-[1440px]:text-2xl "
              >
                Home
              </Button>
            </div>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  className="font-semibold min-[1440px]:text-2xl"
                >
                  Category
                </Button>
                <ChevronDown className="size-4" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="start">
              <DropdownMenuLabel>Choose one Category</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-[#E1E1E1]" />

              <DropdownMenuGroup>
                <DropdownMenuItem>Pants</DropdownMenuItem>
                <DropdownMenuItem>Shirts</DropdownMenuItem>
                <DropdownMenuItem>Jacket</DropdownMenuItem>
                <DropdownMenuItem>Shoes</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
            <div>
              <Button
                variant="ghost"
                className="font-semibold min-[1440px]:text-2xl"
              >
                Promo
              </Button>
            </div>
          </DropdownMenu>

          <div className="relative flex items-center ">
            <Search className="absolute left-3 size-4 " />
            <Input
              placeholder="Search for products"
              className="pl-10 focus-visible:ring-[1px] min-[1440px]:w-[300px]"
            />
          </div>

          <div className="relative">
            <ShoppingCart className="min-[1440px]:size-[30px]" />
            <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-[#5DA96A] ring-2 ring-white" />
          </div>
          <Avatar className="min-[1440px]:size-[45px]">
            <AvatarImage src={IMAGENS.ImageProfile} />
          </Avatar>
        </header>

        <div className="max-[768px]:hidden relative mt-8 max-w-[600px] mx-auto rounded-2xl overflow-hidden lg:max-w-[700px]">
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
      </>
    );

    
}