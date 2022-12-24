import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image
            className="rounded-full object-cover p-1"
            height={50}
            width={50}
            src="https://media.graphassets.com/DBqYljsQtm8vrJ8uG0aP"
            alt={`logo`}
          />
        </Link>
        <h1>TaxLawAdvisers</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-transparent border border-[#62d7a2] text-[#62d7a2] flex items-center rounded-full text-center"
        >
          Sign up for TaxLawAdvisers Newsletter!
        </Link>
      </div>
    </header>
  );
};

export default Header;
