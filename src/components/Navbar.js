import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [sticky , setSticky] = useState(false)
    const [open , setOpen] = useState(false)
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
    ];
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector('nav')
            window.scrollY > 0 ? setSticky(true): setSticky(false)
        })
    })
    return (
			<nav
				className={`fixed w-full left-0 lg:top-[-16px] z-[999] lg:py-4 ${
					sticky ? 'bg-white/60 text-gray-900' : 'text-white'
				}`}
			>
				<div className='flex items-center justify-between'>
					<div className='mx-7'>
						<h4 className='text-4xl'>
							PROT<span className='text-cyan-600'>FOL</span>IO
						</h4>
					</div>
					<div
						className={`${
							sticky ? 'md:bg-white/0 bg-white' : 'bg-white'
						} text-gray-700 md:block hidden font-medium bg-white rounded-bl-full lg:py-4`}
					>
						<ul className='flex items-center gap-1 py-2 text-lg'>
							{menuLinks?.map((menu, i) => (
								<li key={i} className='px-6 hover:text-cyan-600'>
									<a href={menu?.link}>{menu?.name}</a>
								</li>
							))}
						</ul>
					</div>
					<div
						onClick={() => setOpen(!open)}
						className={`z-[999] ${
							open ? 'text-gray-900' : 'text-gray-100'
						} text-3xl md:hidden m-5`}
					>
						<ion-icon name='menu'></ion-icon>
					</div>
					<div
						className={`md:hidden text-gray-900 absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${
							open ? 'right-0' : 'right-[-100%]'
						}`}
					>
						<ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg'>
							{menuLinks?.map((menu, i) => (
								<li key={i} className='px-6 hover:text-cyan-600'>
									<a href={menu?.link}>{menu?.name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		);
};

export default Navbar;