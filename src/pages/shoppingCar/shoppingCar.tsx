import { Button } from "@/components/ui/button";
import {
  Form
} from "@/components/ui/form";
import { formValidation, type FormValidationFromType } from "@/schemas/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormValidationCar } from "./formValidationCar";
import { ProductsShoppingCar } from "./productsShoppingCar";



export function ShoppingCar(){

  const form = useForm<FormValidationFromType>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      zip: "",
      street: "",
      number: "",
      complement: "",
      Neighborhood: "",
      city: "",
      UF: "",
    },
  })
  
  const onSubmit = (data: FormValidationFromType) => {
    toast("purchase done", {
      description: <p> Success done</p>,
    });
  
    console.log(data)
  };


    return (
      <div className="mt-8 mb-8">
        <h1 className="text-center text-2xl font-semibold">
          Complete your purchases
        </h1>
        <div className="flex flex-col items-center justify-center mt-4 gap-4">
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="md:flex gap-5 justify-center">
                  <div className=" md:w-[700px]">
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className=" size-4 md:size-8" />
                      <p className="flex">Delivery Address</p>
                    </div>
                    <FormValidationCar control={form.control} />
                  </div>
                  <div>
                    <ProductsShoppingCar />
                    <Button type="submit" className="bg-[#336c3d] w-full mt-4">
                      Confirm Purchase
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    );
}



