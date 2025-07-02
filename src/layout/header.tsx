
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/">
              <div className="flex items-center gap-2">
                <img src={IMAGENS.Logo} alt="LogoStoreOne" />
                <p className="font-semibold text-xl">Store One</p>
              </div>
            </NavLink>
            <div className="flex items-center gap-4">
              <Search />
              <div className="relative">
                <NavLink to="/shoppingCar">
                  <ShoppingCart />
                </NavLink>
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
        </header>

        {/* Screen +768  */}

        <header className="max-[768px]:hidden md:flex justify-between items-center max-w-[900px] mx-auto min-[1440px]:max-w-[1100px]">
          <NavLink to="/">
            <div className="flex items-center gap-2">
              <img src={IMAGENS.Logo} alt="LogoStoreOne" />
              <p className="font-semibold text-xl min-[1440px]:text-2xl">
                Store One
              </p>
            </div>
          </NavLink>
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
                <DropdownMenuItem>Accessories</DropdownMenuItem>
                <DropdownMenuItem>Hoodie</DropdownMenuItem>
                <DropdownMenuItem>Jacket</DropdownMenuItem>
                <DropdownMenuItem>Pants</DropdownMenuItem>
                <DropdownMenuItem>Shirts</DropdownMenuItem>
                <DropdownMenuItem>Shoes</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
            <div>
              <Button
                variant="ghost"
                className="font-semibold min-[1440px]:text-2xl"
              >
                Products
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
              <NavLink to="/shoppingCar">
                <ShoppingCart className="min-[1440px]:size-[30px]" />
              </NavLink>
              <span className="absolute top-0 right-0 block h-3 w-3 rounded-full bg-[#5DA96A] ring-2 ring-white" />
            </div>
            <Avatar className="min-[1440px]:size-[45px]">
              <AvatarImage src={IMAGENS.ImageProfile} />
            </Avatar>
        </header>

      </>
    );

    
}