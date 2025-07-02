import { CoverHeader } from "@/layout/coverHeader";
import { Category } from "./category";
import { Products } from "./products";

export function Home(){
    return(
        <>
            <CoverHeader />
            <Category />
            <Products />
        </>
    )
}