'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsFileEarmarkPerson } from 'react-icons/bs';
import BrandIcon from '../assets/images/cs.png';

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const triggerMenuRef = React.useRef<HTMLInputElement>(null);
  const navbarRef = React.useRef<HTMLDivElement>(null);

  const pathname = usePathname();

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const closeMenuOnResize = (): void => {
      if (window.innerWidth >= 1200) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => window.removeEventListener('resize', closeMenuOnResize);
  }, []);

  useEffect(() => {
    if (triggerMenuRef.current) {
      if (isMenuOpen) {
        triggerMenuRef.current.checked = true;
      } else {
        triggerMenuRef.current.checked = false;
      }
    }

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`sticky top-0 z-50 w-screen bg-white md:relative safe-layout`}
      >
        {/* <Banner /> */}
        <div className='flex flex-row items-center justify-between py-6  safe-x-padding'>
          <Link className='z-50' href='/' onClick={closeMenu} prefetch={false}>
            <div className='w-[50px] h-[50px] lg:w-[90px] lg:h-[90px]'>
              <Image src={BrandIcon} height={90} width={90} alt='icon' />
            </div>
          </Link>
          {/* desktop menu */}
          <div className='flex-row items-center justify-between hidden text-lg font-bold md:flex md:gap-6 lg:gap-8'>
            <a
              className='px-6 py-2 text-white gradient-btn rounded-xl'
              href='https://drive.google.com/file/d/1m49x1PhSg_lGewM-ELcHG5N2TsYb-miJ/view?usp=sharing'
              target='_blank'
            >
              Resume
            </a>
          </div>
          {/* mobile hamburger menu */}
          <div className='z-50 md:hidden'>
            <label className='cursor-pointer hamburger'>
              <input
                className='hidden'
                type='checkbox'
                ref={triggerMenuRef}
                onClick={toggleMenu}
              />
              <svg viewBox='0 0 32 32' id='hamburger'>
                <path
                  className='line line-top-bottom'
                  d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
                ></path>
                <path className='line' d='M7 16 27 16'></path>
              </svg>
            </label>
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'top-0' : '-translate-y-full'
        } fixed top-0 w-screen h-screen transition-all duration-500 ease-in-out z-40 bg-white`}
        style={{
          paddingTop: navbarRef.current
            ? `${navbarRef.current.offsetHeight}px`
            : '90px',
        }}
      >
        <div className='flex flex-col items-start justify-between p-4 text-lg font-medium lg:hidden lg:gap-8'>
          <ul className='w-full'>
            <li className='flex text-white rounded-lg gradient-bg'>
              <a
                className='flex-1 py-4 safe-x-padding'
                href='https://drive.google.com/file/d/1m49x1PhSg_lGewM-ELcHG5N2TsYb-miJ/view?usp=sharing'
                target='_blank'
              >
                <div className='flex items-center justify-between'>
                  <span className='text-2xl font-semibold'>Resume</span>
                  <span className='text-4xl'>
                    <BsFileEarmarkPerson />
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
