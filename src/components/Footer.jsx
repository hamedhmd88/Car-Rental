import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import logo from "../../Public/images/logo.svg";

function Footer() {
  return (
    <>
      <footer
        className="flex flex-col text-gray-300 bg-[#0A0A0A]  mt-5 border-t border-primary-orange"
        
      >
        <div className="flex max-md:flex-col flex-wrap justify-center items-center gap-5 sm:px-16 px-6 py-10">
          

          <div className="footer__links">
            {footerLinks.map((item) => (
              <div key={item.title} className="footer__link">
                <h3 className="font-bold">{item.title}</h3>
                <div className="flex flex-col gap-5">
                  {item.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-gray-400"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-start items-start gap-6 ">
            <Image
              src={logo}
              alt="لوگو"
              width={118}
              height={18}
              className="object-contain"
            />
          
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap mt-10 border-t border-primary-orange sm:px-16 px-6 py-10">
          <p className=" text-primary-orange">Design By Hamed Mahjoobi</p>

          
        </div>
      </footer>
    </>
  );
}

export default Footer;
