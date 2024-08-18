"use client"
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import ProductCategorySidebar from "@/components/ProductCategorySidebar";
import ProductFilterTopbar from "@/components/ProductFilterTopbar";

import Pagination from "@/components/Pagination";
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { getProducts } from "@/lib/backend";
import { product } from "@/Customtypes";


export default function Home() {

  const ActiveCategory = useSelector((state: RootState) => state.Products.ActiveCategory)
  // const TotalPage = useSelector((state: RootState) => state.Products.TotalPages)
  const Page = useSelector((state: RootState) => state.Products.page)
  const productList = getProducts(ActiveCategory, Page)
  return (

    <div className="flex  flex-row w-full gap-1">
      <ProductCategorySidebar />
      <div className="flex flex-col gap-1 flex-1">
        <ProductFilterTopbar />
        <div className=" w-full flex flex-wrap flex-row gap-5 p-3">
          { productList.map((item, i) => {


            return (<ProductCard product={ item } key={ i } />)


          }) }
        </div>
        <Pagination />
      </div>

    </div>

  );
}
