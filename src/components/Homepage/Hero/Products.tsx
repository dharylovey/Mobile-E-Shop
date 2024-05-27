import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { products } from "@/lib/data";

interface ProductProps {
  id: number;
  name: string;
  image: string;
  price: number;
  like: boolean;
}

export default function Product() {
  const randomizedProducts: ProductProps[] = products
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  const randomizedProducts2 = products
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  const randomizedProducts3 = products
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  return (
    <section className="flex flex-col items-center py-14 px-4 gap-8 lg:py-14  lg:px-[160px] mx-auto">
      <Tabs defaultValue="New Arrival">
        <TabsList>
          <TabsTrigger value="New Arrival" className="lg:text-lg">
            New Arrival
          </TabsTrigger>
          <TabsTrigger value="Best Seller" className="lg:text-lg">
            Best Seller
          </TabsTrigger>
          <TabsTrigger value="Featured Products" className="lg:text-lg">
            Featured Products
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="New Arrival"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {randomizedProducts.map((product) => (
            <Card key={product.id} className="bg-[#F6F6F6]">
              <Link href={`/product/${product.id}`}>
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
                    <h3 className="line-clamp-2 text-center font-medium leading-6">
                      {product.name}
                    </h3>
                    <p className="text-center font-semibold">
                      ${product.price}
                    </p>
                    <Button className="w-full flex mt-auto">Buy Now</Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </TabsContent>
        <TabsContent
          value="Best Seller"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {randomizedProducts2.map((product) => (
            <Card key={product.id} className="bg-[#F6F6F6]">
              <Link href={`/product/${product.id}`}>
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
                    <h3 className="line-clamp-2 text-center font-medium leading-6">
                      {product.name}
                    </h3>
                    <p className="text-center font-semibold">
                      ${product.price}
                    </p>
                    <Button className="w-full flex mt-auto">Buy Now</Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </TabsContent>
        <TabsContent
          value="Featured Products"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {randomizedProducts3.map((product) => (
            <Card key={product.id} className="bg-[#F6F6F6]">
              <Link href={`/product/${product.id}`}>
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
                    <h3 className="line-clamp-2 text-center font-medium leading-6">
                      {product.name}
                    </h3>
                    <p className="text-center font-semibold">
                      ${product.price}
                    </p>
                    <Button className="w-full flex mt-auto">Buy Now</Button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      <div></div>
    </section>
  );
}
