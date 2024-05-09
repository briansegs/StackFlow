import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NavContent = () => {
  return <section>NavContent</section>;
};

const LeftSidebar = () => {
  return (
    <div className="light-border background-light900_dark200 sticky flex h-screen w-64 flex-col items-center justify-between gap-6 border-r p-6 pt-36">
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
