import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

export default function DiscountProduct() {
  const filterProduct = products.slice(4, 8);
  return (
    <section className="flex flex-col px-4 lg:px-4 py-14  md:gap-8 items-start ">
      <h3 className="text-2xl text-center font-medium text-[#000]">
        Discounts up to -50%
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {filterProduct.map((product) => (
          <Card key={product.id} className="bg-[#F6F6F6] w-full">
            <Link href={`/products/${product.id}`}>
              <CardHeader className="flex items-end">
                <CiHeart size={24} className="text-red-500" />
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image}
                  width={200}
                  height={200}
                  alt="products"
                  className="text-center flex justify-center items-center mx-auto"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="line-clamp-1 text-center font-medium leading-6">
                    {product.name}
                  </h3>
                  <p className="text-center font-semibold">${product.price}</p>
                  <Button className="w-full flex mt-auto">Buy Now</Button>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
