"use client";
import Image from "next/image";
import logo from "/public/assets/icons/logo.svg";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LeftSidebar = () => {
  // Get the current path
  const pathname = usePathname();
  const [active, setActive] = useState<number | null>(null);

  const handleChangeActive = (newId: number) => {
    setActive(newId);
  };

  // Update the active state based on the current path
  useEffect(() => {
    const currentLink = sidebarLinks.find((link) => link.route === pathname);
    if (currentLink) {
      setActive(currentLink.id);
    }
  }, [pathname]);
  return (
    <section className="bg-black-1 text-white-1 min-h-screen sticky top-0 left-0 flex flex-col gap-12 w-[270px] pt-8">
      <div className="flex flex-row gap-2 items-center pl-8">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <span className="text-2xl font-bold">Podcastr</span>
      </div>
      <ul className="flex flex-col gap-4">
        {sidebarLinks.map(({ id, imgURL, route, label }) => (
          <li key={id}>
            <Link
              href={route}
              className={`flex flex-row gap-4 items-center relative pl-8 py-4 ${
                active === id ? "white-gradient" : ""
              }`}
              onClick={() => handleChangeActive(id)}
            >
              <div className={`${active === id ? "" : "opacity-40"}`}>
                <Image src={imgURL} alt={label} width={20} height={20} />
              </div>
              <span>{label}</span>
              {active === id && (
                <span className="absolute right-0 top-0 h-full w-[6px] bg-orange-1"></span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LeftSidebar;
