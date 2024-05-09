"use client";

import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-1 flex-col gap-6">
      {sidebarLinks.map(({ imgURL, route, label }) => {
        const isActive =
          (pathname.includes(route) && route.length > 1) || pathname === route;

        return (
          <Link
            href={route}
            key={route}
            className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 p-4`}
          >
            <Image
              src={imgURL}
              alt={label}
              height={20}
              width={20}
              className={`${isActive ? "" : "invert-colors"}`}
            />
            <p className={`${isActive ? "base-bold" : "base-medium"}`}>
              {label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <div className="light-border background-light900_dark200 custom-scrollbar sticky left-0 top-0 flex h-screen w-fit flex-col items-center justify-between gap-6 overflow-y-auto border-x p-6 pt-36 shadow-light-300 dark:shadow-none ">
      <NavContent />

      <SignedOut>
        <div className="flex w-full flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Log In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </SignedOut>
    </div>
  );
};

export default LeftSidebar;
