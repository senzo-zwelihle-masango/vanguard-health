"use client"
import React from "react"
import Link from "next/link"
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/svg/logo"

const menuItems = [
  { name: "Features", href: "#link" },
  { name: "Solution", href: "#link" },
  { name: "Faq's", href: "#link" },
  { name: "Pricing", href: "#link" },
  { name: "About", href: "#link" },
]

const Header = () => {
  const [menuState, setMenuState] = React.useState(false)

  React.useEffect(() => {
    if (!menuState) return

    const mediaQuery = window.matchMedia("(max-width: 1023px)")
    const updateOverflow = () => {
      document.documentElement.classList.toggle(
        "overflow-hidden",
        mediaQuery.matches
      )
    }

    updateOverflow()
    mediaQuery.addEventListener("change", updateOverflow)

    return () => {
      mediaQuery.removeEventListener("change", updateOverflow)
      document.documentElement.classList.remove("overflow-hidden")
    }
  }, [menuState])
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed top-0 z-20 w-full bg-background data-[state=active]:bottom-0"
      >
        <div className="mx-auto px-8 md:px-10 lg:px-12">
          <div className="relative flex flex-wrap items-center justify-between py-5 max-lg:gap-6">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo className="size-8" />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 block cursor-pointer after:absolute after:-inset-4 lg:hidden"
              >
                <div
                  aria-hidden
                  className="m-auto flex size-4.5 flex-col items-center justify-center gap-[7px] duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0"
                >
                  <span className="h-0.5 w-full rounded-full bg-foreground" />
                  <span className="h-0.5 w-full rounded-full bg-foreground" />
                </div>

                <HugeiconsIcon
                  icon={Cancel01Icon}
                  className="absolute inset-0 m-auto size-6 translate-x-[-3px] scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100"
                />
              </button>

              <div className="max-lg:hidden">
                <ul className="flex gap-8">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block duration-150 hover:text-accent-foreground"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 bg-background in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul>
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block py-3 text-2xl font-medium"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  variant="outline"
                  nativeButton={false}
                  render={
                    <Link href="/sign-in">
                      <span>Sign In</span>
                    </Link>
                  }
                />
                <Button
                  nativeButton={false}
                  render={
                    <Link href="/sign-up">
                      <span>Sign Up</span>
                    </Link>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
