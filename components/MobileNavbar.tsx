"use client"
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import classNames from 'classnames'
import { sidebarLinks } from '@/constants'
import { usePathname } from "next/navigation"
import Footer from './Footer'

const MobileNavbar = ({ user }: MobileNavProps) => {
    const pathName = usePathname();
    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" alt="burger" width={30} height={30} className='cursor-pointer' />
                </SheetTrigger>
                <SheetContent side="left" className='bg-white border-none'>
                    <Link href="/" className=" flex cursor-pointer items-center gap-1 px-4 ">
                        <Image src="/icons/logo.svg" alt="logo" width={34} height={34} />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">FinFlow</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                                {sidebarLinks.map(item => {
                                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                                    const linkClass = classNames({
                                        "mobilenav-sheet_close w-full": true,
                                        "bg-bank-gradient": isActive,
                                    })
                                    const imageClass = classNames({
                                        "brightness-[3]": isActive,
                                        "invert-0": isActive
                                    })
                                    const labelClass = classNames({
                                        "text-16 font-semibold text-black-2": !isActive,
                                        "text-white text-16 font-semibold": isActive
                                    }
                                    )
                                    return (
                                        <SheetClose asChild key={item.label}>
                                            <Link href={item.route} key={item.label}  className={linkClass}>
                                                <div className="relative">
                                                    <Image src={item.imgURL} width={20} height={20} alt={item.label} className={imageClass} />
                                                </div>
                                                <p className={labelClass}>{item.label}</p>
                                            </Link>
                                        </SheetClose>
                                    )
                                })}
                            </nav>
                        </SheetClose>
                        <Footer user={user} type='mobile'/>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}

export default MobileNavbar