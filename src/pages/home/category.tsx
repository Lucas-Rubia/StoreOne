
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";
import { IMAGENS } from "@/utils/imagen";



const category = [
  {
    name: "Shirt",
    img: IMAGENS.Shirts,
  },
  {
    name: "Shoes",
    img: IMAGENS.Shoes,
  },
  {
    name: "Hoodie",
    img: IMAGENS.Hoodie,
  },
  {
    name: "Jackets",
    img: IMAGENS.Jackets,
  },
  {
    name: "Pants",
    img: IMAGENS.Pants,
  },
  {
    name: "Accessories",
    img: IMAGENS.Accessories,
  },
];

export function Category(){
  return (
    <Carousel className="w-full mt-8 lg:hidden">
      <CarouselContent >
        {category.map((item, index) => (
          <CarouselItem key={index} className="basis-1/4 min-[500px]:basis-1/6">
            <div className="p-1 flex flex-col">
                  <img 
                    src={item.img} 
                    alt={`Imagem da categoria ${item.name}`} 
                    className="rounded-full size-12 mx-auto" 
                  />
                  <span className="font-semibold text-center">{item.name}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

