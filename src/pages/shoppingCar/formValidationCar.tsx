import {
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { FormValidationFromType } from "@/schemas/formValidation";
import type { Control } from "react-hook-form";


interface FormValidationProps{
    control: Control<FormValidationFromType>
}


export function FormValidationCar({control}:FormValidationProps){
    return (
      <div className="w-full flex flex-col gap-4">
        <FormField
          control={control}
          name="zip"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="uppercase"
                  placeholder="ZIP code"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="street"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="uppercase" placeholder="street" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="number"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="uppercase" placeholder="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="complement"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    className="uppercase"
                    placeholder="complement"
                    {...field}
                  />
                  <span className="absolute right-3 top-2 text-text-sm text-[#8E8E93] ">
                    Optional
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="Neighborhood"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="uppercase"
                  placeholder="Neighborhood"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="uppercase" placeholder="CIDADE" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="UF"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="uppercase" placeholder="UF" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
}