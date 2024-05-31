import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function BannerSummer() {
  return (
    <section className="flex flex-col justify-center items-center px-4 py-[104px] gap-2 bg-gradient-to-r from-[#2E2E2E] to-[#000]">
      <div className="flex flex-col items-center gap-10 self-stretch">
        <div className="flex flex-col items-center self-stretch">
          <h2 className="text-center text-[#fff] text-5xl font-extralight tracking-tighter">
            Big Summer{" "}
            <span className="text-[#fff] text-5xl font-medium">Sale</span>
          </h2>
          <p className="text-[#787878] text-center text-base font-normal">
            Commodo fames vitae vitae leo mauris in. Eu consequat.
          </p>
        </div>
        <Link href={"/product"}>
          <Button
            variant={"outline"}
            className="bg-transparent text-[#fff]"
            size={"lg"}
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
