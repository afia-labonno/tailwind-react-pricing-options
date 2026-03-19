import React, { useState } from 'react';
import Links from './Links';
import { Menu, X } from 'lucide-react';

const navLinks = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Services",
        path: "/services"
    },
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "Contact",
        path: "/contact"
    }
];


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const links = navLinks.map(route => <Links key={route.id} route={route}></Links>)

    return (
        <nav className='flex justify-between mx-10 mt-5'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {
                    open ?
                        <X className='md:hidden'></X>
                        : <Menu className='md:hidden'></Menu>
                }

                <ul className={`md:hidden absolute duration-1000 text-black
                    ${open ? 'top-8' : '-top-40'}
                    `}>
                    {links}
                </ul>

                <h3 className='ml-4'>My Navbar</h3>
            </span>

            <ul className='md:flex hidden'>
               {
                links
               }
            </ul>

            {/* <ul className='flex'>
                {
                    navLinks.map(route =><li className='mr-10'>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="/">Home</a></li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
            </ul> */}

            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;