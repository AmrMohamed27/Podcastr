"use client";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { sidebarLink } from "@/types";
import SiteLogo from "../common/SiteLogo";

const LeftSidebar = ({
  className,
  isOpen,
}: {
  className: string;
  isOpen: boolean;
}) => {
  // Get the current path
  const pathname = usePathname();
  // Active state for current route
  const [active, setActive] = useState<number | null>(null);
  // Function to change active state
  const handleChangeActive = (newId: number) => {
    setActive(newId);
  };

  // Update the active state based on the current path
  useEffect(() => {
    const currentLink: sidebarLink | undefined = sidebarLinks.find(
      (link) => link.route === pathname
    );
    if (currentLink) {
      setActive(currentLink.id);
    }
  }, [pathname]);
  return (
    // Container
    <section
      className={`${className} bg-black-1 text-white-1 min-h-screen flex-col gap-12 w-[270px] pt-8 z-50 ${
        isOpen ? "translate-x-0" : "-translate-x-[105%]"
      } transform transition-transform duration-300 ease-in`}
    >
      {/* Logo and title */}
      <div className="pl-8">
        <SiteLogo />
      </div>
      {/* Sidebar links */}
      <ul className="flex flex-col gap-4">
        {sidebarLinks.map(({ id, imgURL, route, label }) => (
          <li key={id}>
            <Link
              href={route}
              className={`flex flex-row gap-4 items-center relative pl-8 py-4  ${
                active === id ? "white-gradient" : ""
              }`}
              onClick={() => handleChangeActive(id)}
            >
              {/* Icon and label */}
              <div
                className={`${
                  active === id ? "" : "opacity-40"
                } transition-opacity duration-500 ease-in-out`}
              >
                <Image src={imgURL} alt={label} width={20} height={20} />
              </div>
              <span
                className={`${
                  active === id ? "" : "opacity-40"
                } transition-opacity duration-500 ease-in-out`}
              >
                {label}
              </span>
              {active === id && (
                <span className="absolute right-0 top-0 h-full w-[6px] bg-orange-1 animate-in fade-in duration-700"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LeftSidebar;
