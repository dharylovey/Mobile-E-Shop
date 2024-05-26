import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

interface ProductProps {
  id: number;
  description: string;
  image: string;
  price: number;
  like: boolean;
}

const products: ProductProps[] = [
  {
    id: 1,
    description: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    price: 900,
    image: "/images/productImage/iphone14.png",
    like: true,
  },
  {
    id: 2,
    description: "Blackmagic Pocket Cinema Camera 6k",
    price: 2535,
    image: "/images/productImage/camera.png",
    like: true,
  },
  {
    id: 3,
    description: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    price: 399,
    image: "/images/productImage/applewatch.png",
    like: true,
  },
  {
    id: 4,
    description: "AirPods Max Silver",
    price: 549,
    image: "/images/productImage/headphone.png",
    like: true,
  },
  {
    id: 5,
    description: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: 369,
    image: "/images/productImage/samsungwatch.png",
    like: false,
  },
  {
    id: 6,
    description: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: 1799,
    image: "/images/productImage/galaxyzfold.png",
    like: false,
  },
  {
    id: 7,
    description: "Galaxy Buds FEGraphite",
    price: 99.99,
    image: "/images/productImage/galaxybuds.png",
    like: false,
  },
  {
    id: 8,
    description: 'Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021',
    price: 398,
    image: "/images/productImage/appleipad.png",
    like: true,
  },
];

export default function Products() {
  const randomizedProducts = products
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
                    {product.description}
                  </h3>
                  <p className="text-center font-semibold">${product.price}</p>
                  <Button className="w-full flex mt-auto">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent
          value="Best Seller"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {randomizedProducts.map((product) => (
            <Card key={product.id} className="bg-[#F6F6F6]">
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
                    {product.description}
                  </h3>
                  <p className="text-center font-semibold">${product.price}</p>
                  <Button className="w-full flex mt-auto">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent
          value="Featured Products"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {randomizedProducts.map((product) => (
            <Card key={product.id} className="bg-[#F6F6F6]">
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
                    {product.description}
                  </h3>
                  <p className="text-center font-semibold">${product.price}</p>
                  <Button className="w-full flex mt-auto">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
      <div></div>
    </section>
  );
}
