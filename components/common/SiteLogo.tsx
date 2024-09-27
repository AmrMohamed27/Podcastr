import Image from "next/image";
import logo from "/public/assets/icons/left-sidebar/logo.svg";
import Link from "next/link";
const SiteLogo = () => {
  return (
    <Link className="flex flex-row gap-2 items-center" href={"/"}>
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <span className="text-2xl font-bold">Podcastr</span>
    </Link>
  );
};

export default SiteLogo;
