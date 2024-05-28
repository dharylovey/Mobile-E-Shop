import Link from "next/link";
import { FaFacebookF, FaTwitter, FaTiktok, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col px-8 gap-8 py-12 items-center justify-center lg:px-[160px] lg:py-[104px] lg:items-start bg-[#181313] mt-auto lg:self-stretch">
      <div className="flex flex-col  items-center gap-8 lg:items-start lg:content-start lg:justify-between lg:flex-row lg:gap-y-[113px] lg:self-stretch">
        <div className="flex flex-col items-center gap-4 lg:items-start lg:gap-6">
          <Link href={"/"}>
            <h1 className="items-center text-[#fff] text-3xl">cyber</h1>
          </Link>
          <p className="text-center font-normal text-[#CFCFCF] lg:text-start">
            We are a residential interior design firm located in Portland. Our
            boutique-studio offers more than
          </p>
        </div>
        <div className="flex flex-col items-center gap-8 lg:w-[623px] lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col items-center gap-4 lg:items-start lg:w-[296px]">
            <h3 className="text-[#FFF] text-lg font-semibold">Services</h3>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Bonus program
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Gift cards
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Credit and payment
              </p>
            </Link>

            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Service contracts
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Credit and payment
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Non-cash account
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Credit and payment
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Payment
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <h3 className="text-[#FFF] text-lg font-semibold">
              Assistance to the buyer
            </h3>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Find an order
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Terms of delivery
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Exchange and return of goods
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Guarantee
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Frequently asked questions
              </p>
            </Link>
            <Link href={"/"}>
              <p className="text-center text-[#CFCFCF] text-base font-normal hover:underline">
                Terms of use of the site
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex w-[175px] justify-between">
        <Link href={"https://www.facebook.com/"} target="_blank">
          <FaFacebookF size={24} color="white" />
        </Link>
        <Link href={"https://twitter.com/?lang=en"} target="_blank">
          <FaTwitter size={24} color="white" />
        </Link>
        <Link href={"https://www.tiktok.com/"} target="_blank">
          <FaTiktok size={24} color="white" />
        </Link>
        <Link href={"https://www.instagram.com/"} target="_blank">
          <FaInstagram size={24} color="white" />
        </Link>
      </div>
    </footer>
  );
}
