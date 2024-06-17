import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SmallBanner() {
  return (
    <div className="hidden lg:block self-stretch">
      <div className="flex max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center max-md:max-w-full">
            <div className="justify-end pr-12 bg-white max-md:pr-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <Image
                    src={"/images/PlayStation.png"}
                    className="grow w-full aspect-[1.1]"
                    alt="hero banner"
                    width={360}
                    height={343}
                  />
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col justify-center mt-28 font-medium max-w-[404px] max-md:mt-10">
                    <h2 className="text-5xl leading-10 text-black max-md:text-4xl">
                      Playstation 5
                    </h2>
                    <p className="mt-4 text-sm leading-6 text-neutral-400">
                      Incredibly powerful CPUs, GPUs, and an SSD with integrated
                      I/O will redefine your PlayStation experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-md:max-w-full">
              <div className="flex  max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-10 self-stretch w-full bg-gray-200">
                    <Image
                      src={"/images/cutheadphone.png"}
                      alt="hero banner"
                      width={104}
                      height={272}
                      className="shrink-0 max-w-full aspect-[0.38] w-[104px]"
                    />
                    <div className="flex flex-col justify-center px-5 py-1 my-auto max-w-[168px]">
                      <h2 className="text-3xl font-light leading-10 text-black">
                        Apple <br />
                        AirPods <span className="font-medium">Max</span>
                      </h2>
                      <p className="mt-2 text-sm font-medium leading-6 text-neutral-400">
                        {`Computational audio. Listen, it's powerful`}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex grow gap-10 self-stretch py-10 w-full bg-neutral-700">
                    <Image
                      className="shrink-0 max-w-full aspect-[0.71] w-[136px]"
                      src={"/images/cutvision.png"}
                      alt="hero banner"
                      width={136}
                      height={272}
                    />
                    <div className="flex flex-col justify-center px-5 py-1 my-auto max-w-[176px]">
                      <h2 className="text-3xl font-light leading-10 text-white">
                        Apple <br />
                        Vision{" "}
                        <span className="font-medium text-white">Pro</span>
                      </h2>
                      <p className="mt-2 text-sm font-medium leading-6 text-neutral-400">
                        An immersive way to experience entertainment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full"
          style={{
            background:
              "linear-gradient(135deg, #A6E8FF 14.64%, #B280F5 85.36%)",
          }}
        >
          <div className="grow py-11 pl-14 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto font-medium max-w-[360px] max-md:mt-10">
                  <h2 className="text-6xl font-extralight text-black leading-[56px] max-md:text-4xl max-md:leading-10">
                    Macbook <span className="font-medium">Air</span>
                  </h2>
                  <p className="my-4 text-sm leading-6 text-neutral-400">
                    The new 15‑inch MacBook Air makes room for more of what you
                    love with a spacious Liquid Retina display.
                  </p>
                  <Link href={"/product"}>
                    <Button
                      variant={"outline"}
                      size={"lg"}
                      className="border-[#000] bg-transparent text-base font-medium leading-6 text-[#000]"
                    >
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full justify-end">
                <div className="flex flex-col grow justify-center items-center max-md:mt-10">
                  <Image
                    src={"/images/MacBookPro14.png"}
                    alt="hero banner"
                    width={292}
                    height={272}
                    className="self-end w-[292px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
