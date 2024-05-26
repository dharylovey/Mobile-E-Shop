import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { GiHeadphones } from "react-icons/gi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CgGames } from "react-icons/cg";

export default function Category() {
  return (
    <section className="flex w-[375px] py-16 px-4 flex-col gap-12 mx-auto self-stretch md:w-[700px] lg:w-full  lg:px-[160px] lg:py-[80px] lg:flex-col lg:gap-8 lg:items-start">
      <div className="flex justify-between items-center self-stretch">
        <h2 className="font-medium leading-8 text-xl">Browse By Category</h2>
        <div className="flex items-start gap-4">
          <Button variant={"ghost"}>
            <IoIosArrowBack size={24} />
          </Button>
          <Button variant={"ghost"}>
            <IoIosArrowForward size={24} />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 lg:gap-8 self-stretch flex-wrap">
        <div className="flex w-[160px] h-[128px] min-w-[135px] px-[52px] py-6 flex-col justify-center items-center gap-2 border  rounded-2xl bg-[#ededed]">
          <HiOutlineDevicePhoneMobile size={48} />
          <p>Phone</p>
        </div>
        <div className="flex w-[160px] h-[128px] min-w-[135px] px-[52px] py-6 flex-col justify-center items-center gap-2 border rounded-2xl bg-[#ededed]">
          <BsSmartwatch size={48} />
          <p>SmartWatch</p>
        </div>
        <div className="flex w-[160px] h-[128px] min-w-[135px] px-[52px] py-6 flex-col justify-center items-center gap-2 border rounded-2xl bg-[#ededed]">
          <CiCamera size={48} />
          <p>Camera</p>
        </div>
        <div className="flex w-[160px] h-[128px] min-w-[135px] px-[52px] py-6 flex-col justify-center items-center gap-2 border rounded-2xl bg-[#ededed]">
          <GiHeadphones size={48} />
          <p>Headphones</p>
        </div>
        <div className="flex w-[160px] h-[128px] min-w-[135px] px-[52px] py-6 flex-col justify-center items-center gap-2 border rounded-2xl bg-[#ededed]">
          <HiOutlineDesktopComputer size={48} />
          <p>Computer</p>
        </div>
        <div className="flex w-[160px] h-[128px] min-w-[135px] px-[52px] py-6 flex-col justify-center items-center gap-2 border rounded-2xl bg-[#ededed]">
          <CgGames size={48} />
          <p>Gaming</p>
        </div>
      </div>
    </section>
  );
}
