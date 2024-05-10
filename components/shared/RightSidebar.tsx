import React from "react";

const RightSidebar = () => {
  return (
    <section className="light-border background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex h-screen w-fit flex-col  gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]"></div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4"></div>
      </div>
    </section>
  );
};

export default RightSidebar;
