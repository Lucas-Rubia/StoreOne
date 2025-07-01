import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IMAGENS } from "@/utils/imagen";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Hoodie Gray",
    img: IMAGENS.HoodieGray,
    review: 60,
    price: 60.0,
  },
  {
    name: "705 Shirt",
    img: IMAGENS.Shirt705,
    review: 60,
    price: 50.0,
  },
  {
    name: "Brown-T Shirt",
    img: IMAGENS.BrownTShirt,
    review: 16,
    price: 90.0,
  },
  {
    name: "Carbon Shoes",
    img: IMAGENS.CarbonShoes,
    review: 88,
    price: 219.99,
  },
  {
    name: "Gray Tree Hat",
    img: IMAGENS.GrayTreeHat,
    review: 60,
    price: 80.0,
  },
  {
    name: "705 Shirt",
    img: IMAGENS.Shirt705,
    review: 60,
    price: 50.0,
  },
];


export function Products(){
    return (
      <div className="mt-8 m-6 lg:mx-32 lg:my-[60px]">
        <h1 className="font-bold text-lg mb-5 md:text-4xl">Our Products</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {products.map((product, index) => (
            <Card key={index} className="border-none max-w-[300px]">
              <div className="relative">
                <img
                  src={product.img}
                  className="w-full max-h-80"
                  alt={`Imagem do ${product.name}`}
                />
                <Button className="absolute top-2 right-2 size-7 bg-white rounded-full hover:bg-[#d5d5d5]">
                  <ShoppingCart className="text-black"/>
                </Button>

                <div className="ml-2">
                  <p className="font-medium text-base mt-2.5">{product.name}</p>
                  <p className="font-medium text-[10px] text-[#8E8E93] mt-1.5 mb-2.5">
                    {product.review} Reviwers
                  </p>
                  <p className="font-semibold">$ {product.price.toFixed(2)}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
}