'use client'
 
import { usePathname } from 'next/navigation'
import Logo from '../../../../public/assets/icons/logo.png'
import Image from "next/image";
import './header.scss'
import ButtonComponent from '../button/button';
import Link from 'next/link'


export default function Header() {
  const pathname = usePathname(); 
  return (
    <div className='header-box'>
      <Image
        src={Logo}
        alt="logo"
        width={160}
        height={160}
      />
      <div className='header__middle'>
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/about">About us</Link>
        <Link href="/about">Reviews</Link>
        <div>FAQ</div>
      </div>
      <div>
        <ButtonComponent btnText='Get started' className='header-btn' />
      </div>
    </div>
  );
}