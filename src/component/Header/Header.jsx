"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout, setAuthenticated } from "@/../redux/authSlice";
import { useRouter } from "next/navigation";
import UserProfile from "@/component/users/UserProfile";

const topBarInfo = [
    { icon: "fas fa-envelope", text: "info@apiinc.ca", href: "mailto:info@apiinc.ca" },
    { icon: "fas fa-phone-alt", text: "+1 (438) - 380 - 0606", href: "callto:+00856554863" }
];

const guestNavLinks = [
    { text: "Accueil", href: "/", active: true },
    { text: "A Propos", href: "/about_us", active: false },
    { text: "Services", href: "/services", active: false },
    { text: "FAQ", href: "/frequently-asked-questions", active: false }
];

const authenticatedNavLinks = [
    { text: "Accueil", href: "/", active: true },
    { text: "Mon Espace", href: "/user/my-space/home", active: false },
    { text: "FAQ", href: "/frequently-asked-questions", active: false }
];

const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.5 } }
};

const Header = () => {
    const [navLinks, setNavLinks] = useState(guestNavLinks);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            dispatch(setAuthenticated(true));
        } else {
            dispatch(setAuthenticated(false));
        }
    }, [dispatch]);

    useEffect(() => {
        if (isAuthenticated) {
            setNavLinks(authenticatedNavLinks);
        } else {
            setNavLinks(guestNavLinks);
        }
    }, [isAuthenticated]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleIsPressed = (index) => {
        const updatedLinks = navLinks.map((link, i) => ({
            ...link,
            active: i === index,
        }));
        setNavLinks(updatedLinks);
        router.push(navLinks[index].href);
    };



    return (
        <header className={`w-full ${isScrolled ? 'fixe' : 'block'} top-0 bg-[#272C3F] border-b border-gray-200 text-sm dark:border-neutral-700 z-50`}>
            <div className={`hidden md:block topbar bg-white ${isScrolled ? "hidden": "block"}`}>
                <div className="container mx-auto flex justify-between items-center py-2 px-8 poppins-extralight">
                    <div className="flex items-center space-x-4">
                        {topBarInfo.map((info, index) => (
                            <p key={index} className="topbar-info mb-0 flex items-center">
                                <i className={`${info.icon} text-gray-800 text-sm dark:text-gray-300`}></i>
                                <a href={info.href} className="ml-2 text-gray-800 text-[11px] poppins-extralight tracking-wider">{info.text}</a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <nav className="hidden md:flex items-center justify-between relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
                <div className="">
                    <a className="text-xl font-semibold dark:text-white" href="/" aria-label="Brand">
                        <Image src="/logo1.svg" alt="" className="w-32 h-14 -mt-5"
                               width={128}
                               height={56}
                        />
                    </a>
                </div>
                <div id="navbar-collapse-with-animation" className="py-6 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
                        {navLinks.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <span
                                    className={`py-3 ps-px sm:px-3 poppins-extralight-italic ${link.active ? 'text-blue-600 dark:text-blue-500' : 'text-gray-400 hover:text-blue-400 transition-colors duration-200 dark:text-gray-300 dark:hover:text-blue-500'}`}
                                    aria-current={link.active ? 'page' : undefined}
                                    onClick={() => handleIsPressed(index)}
                                >
                                    {link.text}
                                </span>
                            </Link>
                        ))}
                        {isAuthenticated && user ? (
                            <>
                                <div className="text-gray-500 dark:text-gray-300 px-4 poppins-bold">
                                    {user.firstName}
                                </div>
                                <UserProfile
                                    setNavLinks={setNavLinks}
                                    guestNavLinks={guestNavLinks}
                                />
                            </>
                        ) : (
                            <Link href="/user/signin">
                                <span className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:ms-4 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500">
                                    <svg className="flex-shrink-0 size-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                    </svg>
                                    Mon espace
                                </span>
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

            {/*phone devices*/}
            <div className="sm:hidden bg-[#272C3F] text-white">
                <div className="flex flex-col items-center justify-center text-center py-2">
                    <p className="poppins-extralight-italic text-sm">9501 Ave. Christophe Colomb, Suite 205, Montréal, QC, Canada, H2N 2E3</p>
                    <p className="mt-2 poppins-extralight-italic text-sm">(438) 380-0606 | 9:00 - 21:00</p>
                    <button className="mt-2 py-4 px-8 text-white rounded-full border-[1px] border-[#C0B596]">
                        Bientôt Disponible
                    </button>
                </div>
                <nav className="flex justify-between items-center px-4 py-4 border-t border-gray-700">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="hs-collapse-toggle p-2 text-white bg-[#C0B596]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-controls="navbar-collapse-mobile"
                            aria-label="Toggle navigation"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="text-xl font-semibold">
                        <a className="font-semibold dark:text-white" href="/" aria-label="Brand">
                            <Image src="/logo55.svg" alt="" className="w-32 h-14 -mt-5"
                                   width={128}
                                   height={56}
                            />
                        </a>
                    </div>
                    <div className="border-l-[1px] border-gray-400 p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </div>
                </nav>
                <motion.div
                    id="navbar-collapse-mobile"
                    className="hs-collapse overflow-hidden"
                    initial="hidden"
                    animate={isMenuOpen ? "visible" : "hidden"}
                    variants={menuVariants}
                >
                    <div className="flex flex-col items-center py-2 space-y-2">
                        {navLinks.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <span
                                    className={`py-2 px-4 rounded ${link.active ? 'bg-[#C0B596] text-[#162542]' : 'text-white'}`}
                                    aria-current={link.active ? 'page' : undefined}
                                    onClick={() => {
                                        handleIsPressed(index);
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    {link.text}
                                </span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;
