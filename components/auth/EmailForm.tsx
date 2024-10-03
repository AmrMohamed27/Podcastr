"use client";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <Label>Email Address</Label>
        <Input
          type="email"
          className="bg-black-input border-none outline-none sm:min-w-[20rem] md:min-w-[25rem] caret-orange-1 text-white-1 focus-visible:ring-0"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <Button className="bg-orange-1 hover:bg-orange-1/60">Continue</Button>
    </form>
  );
};

export default EmailForm;
