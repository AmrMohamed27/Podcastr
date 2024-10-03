// Icons
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { FaGithub as GitHub } from "react-icons/fa";
import SiteLogo from "../common/SiteLogo";
// shadcn Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Constants
import { signInFooterLinks } from "@/constants";
import Link from "next/link";
import EmailForm from "./EmailForm";

const SignIn = () => {
  const icons = [<GoogleIcon key={0} />, <GitHub key={1} />];
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Card className="bg-black-1 z-50 border-none rounded-xl px-4 py-10 text-white-1">
        <CardHeader>
          <CardTitle className="mb-4">
            <SiteLogo />
          </CardTitle>
          <CardDescription className="text-gray-2 mt-12">
            Sign In to continue to Podcastr
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-row gap-1">
              {icons.map((icon, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 border-white-1/10 border-[3px] rounded-lg *:text-2xl"
                >
                  {icon}
                </div>
              ))}
            </div>
            <EmailForm />
          </div>
        </CardContent>
        <CardFooter className="text-white-6 mt-4">
          <div className="flex flex-col md:flex-row justify-between text-sm w-full max-md:gap-4 items-start">
            <div>
              <p>
                No account?{" "}
                <Link className="text-orange-1" href={"/sign-up"}>
                  Sign Up
                </Link>
              </p>
            </div>
            <div className="flex flex-row gap-6">
              {signInFooterLinks.map((link, index) => (
                <p key={index}>
                  <Link href={link.link} className="text-white-1">
                    {link.label}
                  </Link>
                </p>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
