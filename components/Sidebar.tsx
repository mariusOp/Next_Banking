"use client"

import { sidebarLinks } from "@/constants"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = ({ user }: SiderbarProps) => {
    const pathName = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 flex cursor-pointer items-center gap-2 ">
                    <Image src="/icons/logo.svg" alt="logo" width={34} height={34} className="size-[24px] max-xl:size-14" />
                    <h1 className="sidebar-logo">FinFlow</h1>
                </Link>
                {sidebarLinks.map(item => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`)
                    const linkClass = classNames({
                        "sidebar-link": true,
                        "bg-bank-gradient": isActive,
                    })
                    const imageClass = classNames({
                        "brightness-[3]" : isActive,
                        "invert-0": isActive
                    })
                    const labelClass = classNames({
                        "sidebar-label": true,
                        "!text-white" :isActive
                    }
                    )
                    return (
                        <Link href={item.route} key={item.label} className={linkClass}>
                            <div className="relative size-6">
                            <Image src={item.imgURL} fill alt={item.label} className={imageClass}/>
                            </div>
                            <p className={labelClass}>{item.label}</p>
                        </Link>
                    )
                })}
            </nav>
        </section>
    )
}

export default Sidebar
