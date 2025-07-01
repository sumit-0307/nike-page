import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';

const Nav = () => {

const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className='padding-x absolute z-10 w-full' style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <nav className='flex justify-between items-center'>
            <a href="/">
            <img 
             src={headerLogo}
             alt='logo'
             width={130}
             height={29}

            />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href}
                            className='font-montserrat leading-normal text-lg text-slate-gray'
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='hidden max-lg:block cursor-pointer'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img 
                src={hamburger}
                alt='Hamburger'
                width={25}
                height={25}
                />
            </div>
        </nav>
         {isMenuOpen && (
        <ul className="flex flex-col items-start bg-white shadow-md rounded-lg p-6 mt-4 absolute top-full left-4 right-4 z-20 lg:hidden"
         onClick={() => setIsMenuOpen(false)}>
          {navLinks.map((item) => (
            <li key={item.label} className="mb-4 w-full">
              <a
                href={item.href}
                className="font-montserrat text-base text-slate-gray block w-full"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Nav