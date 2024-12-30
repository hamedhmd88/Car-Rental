import Image from "next/image"
import CustomButton from "./CustomButton"
import logo from "../../Public/images/logo.svg"
import Link from "next/link"

function Navbar() {
  return (
    <>
      <header className='w-full  absolute z-10'>
    <nav className=' border-max-w-[1440px] mx-auto flex flex-row-reverse justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src={logo}
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='ورود'
        btnType='button'
        containerStyles='text-primary-orange border-[#ff3b1f] border-2 rounded-full bg-[#0A0A0A] font-bold min-w-[130px]'
      />
    </nav>
  </header>
    </>
  )
}

export default Navbar
