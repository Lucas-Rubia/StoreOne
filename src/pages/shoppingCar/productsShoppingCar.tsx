import { Card } from "@/components/ui/card";
import { useConter } from "@/hooks/conter";
import { IMAGENS } from "@/utils/imagen";
import { Minus, Plus } from "lucide-react";

export function ProductsShoppingCar(){
  const { count, increment, decrement} = useConter();


    return (
      <div>
        <h1 className="font-bold text-lg mt-4 md:text-2xl text-center md:mt-0 ">
          Your Products
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <Card className="border-none max-w-[120px]">
            <div className="">
              <img
                src={IMAGENS.HoodieGray}
                className="w-full max-h-80"
                alt={`Imagem do HoodieGray `}
              />
              <div className="ml-2">
                <p className="font-medium text-base mt-2.5">HoodieGray</p>
                <p className="font-medium">$ 60.00</p>
              </div>
              <p className="ml-2 mt-1 font-semibold">Amount</p>
              <div className="flex gap-4 ml-2">
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={decrement}>
                  <Minus className="size-4 text-purple" />
                </button>
                <span className="text-lg">{count}</span>
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={increment}>
                  <Plus className="size-4 text-purple" />
                </button>
              </div>
            </div>
          </Card>
          <Card className="border-none max-w-[120px]">
            <div className="">
              <img
                src={IMAGENS.HoodieGray}
                className="w-full max-h-80"
                alt={`Imagem do HoodieGray `}
              />
              <div className="ml-2">
                <p className="font-medium text-base mt-2.5">HoodieGray</p>
                <p className="font-medium">$ 60.00</p>
              </div>
              <p className="ml-2 mt-1 font-semibold">Amount</p>
              <div className="flex gap-4 ml-2">
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={decrement}>
                  <Minus className="size-4 text-purple" />
                </button>
                <span className="text-lg">{count}</span>
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={increment}>
                  <Plus className="size-4 text-purple" />
                </button>
              </div>
            </div>
          </Card>
          <Card className="border-none max-w-[120px]">
            <div className="">
              <img
                src={IMAGENS.HoodieGray}
                className="w-full max-h-80"
                alt={`Imagem do HoodieGray `}
              />
              <div className="ml-2">
                <p className="font-medium text-base mt-2.5">HoodieGray</p>
                <p className="font-medium">$ 60.00</p>
              </div>
              <p className="ml-2 mt-1 font-semibold">Amount</p>
              <div className="flex gap-4 ml-2">
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={decrement}>
                  <Minus className="size-4 text-purple" />
                </button>
                <span className="text-lg">{count}</span>
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={increment}>
                  <Plus className="size-4 text-purple" />
                </button>
              </div>
            </div>
          </Card>
          <Card className="border-none max-w-[120px]">
            <div className="">
              <img
                src={IMAGENS.HoodieGray}
                className="w-full max-h-80"
                alt={`Imagem do HoodieGray `}
              />
              <div className="ml-2">
                <p className="font-medium text-base mt-2.5">HoodieGray</p>
                <p className="font-medium">$ 60.00</p>
              </div>
              <p className="ml-2 mt-1 font-semibold">Amount</p>
              <div className="flex gap-4 ml-2">
                <button type="button" className="bg-gray-200 p-2 rounded-sm"   onClick={decrement}>
                  <Minus className="size-4 text-purple" />
                </button>
                <span className="text-lg">{count}</span>
                <button type="button" className="bg-gray-200 p-2 rounded-sm"  onClick={increment}>
                  <Plus className="size-4 text-purple" />
                </button>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center text-sm my-4 px-5 py-4 rounded-lg bg-gray-200 space-y-3">
          <div className="flex justify-between ">
            <p>Price of itens</p>
            <p>$ 1000.00</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>$ 20.00 </p>
          </div>
          <div className="flex justify-between text-base font-bold">
            <p>Total Count</p>
            <p>$ 1020.00 </p>
          </div>
        </div>
      </div>
    );
}