import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row '>
      
        <div className="flex flex-col items-center gap-4">
      <p className="text-lg font-bold">Follow us on:</p>
      <div className="flex gap-4">
        <a href="https://www.youtube.com/" target="_blank" className="text-percentage-500 hover:text-percentage-200">
        <FaYoutube size={24} />
        </a>
        <a href="https://www.instagram.com/atifakhtar7158/" target="_blank" className="text-percentage-500 hover:text-percentage-200">
        <FaInstagram size={24}/>
        </a>
        <a href="https://twitter.com/home" target="_blank" className="text-percentage-500 hover:text-percentage-200">
         <FaXTwitter size={24} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100085927399592" target="_blank"  className="text-percentage-500 hover:text-percentage-200">
        <FaFacebookF size={24} />
        </a>
      </div>
    </div>    
        
        
        <Link href="/">
          <Image
            src="/assets/images/logo_new.svg"
            alt='logo'
            width={128}
            height={38}
          />
        </Link>  

        <div className="flex flex-col items-center justify-center gap-2">
  <p className="text-lg font-bold">Contact Us:</p>
  <a href="mailto:maven@gmail.com" target="_blank" className="flex items-center gap-2 text-percentage-500 hover:text-percentage-200">
    <BiLogoGmail size={24} /> 
    <span>maven@gmail.com</span>
  </a>
  <a href="tel:+916287740240" target="_blank" className="flex items-center gap-2 text-percentage-500 hover:text-percentage-200">
    <IoCall size={24} />
    <span>+91 6287740240</span>
  </a>
</div>

      </div>
    </footer>
  )
}

export default Footer
