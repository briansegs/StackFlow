import { Skeleton } from "@/components/ui/skeleton";
import { SignedIn } from "@clerk/nextjs";
import React from "react";

const Loading = () => {
  return (
    <section>
      <div className="flex flex-col-reverse items-start justify-between sm:flex-row">
        <div className="flex flex-col items-start gap-4 lg:flex-row">
          <Skeleton className="size-[140px] rounded-full" />

          <div className="mt-3">
            <Skeleton className="mb-1 h-9 w-60" />

            <Skeleton className="h-6 w-40" />

            <div className="mt-5 flex flex-wrap items-center justify-start gap-5">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
            </div>

            <Skeleton className="mt-8 h-6 w-96" />
          </div>
        </div>

        <div className="flex justify-end max-sm:mb-5 max-sm:w-full sm:mt-3">
          <SignedIn>
            <Skeleton className="min-h-[46px] min-w-[175px] " />
          </SignedIn>
        </div>
      </div>

      <div className="mt-10">
        <h4 className="h3-semibold text-dark200_light900">Stats</h4>

        <div className="mt-5 grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton key={item} className="h-44 w-full rounded-md" />
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2">
        <div className="flex-1">
          <Skeleton className="h-10 w-44  rounded-md" />
        </div>

        <div className="flex w-full flex-col gap-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton key={item} className="h-48 w-full rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;
