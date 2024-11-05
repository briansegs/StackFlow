import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";
import React from "react";
import { getHotQuestions } from "@/lib/actions/question.action";

const popularTags = [
  {
    _id: "1",
    name: "Javascript",
    totalQuestions: 5,
  },
  {
    _id: "2",
    name: "react",
    totalQuestions: 12,
  },
  {
    _id: "3",
    name: "next",
    totalQuestions: 8,
  },
  {
    _id: "4",
    name: "vue",
    totalQuestions: 2,
  },
  {
    _id: "5",
    name: "redux",
    totalQuestions: 3,
  },
];

const RightSidebar = async () => {
  const hotQuestions = await getHotQuestions();

  return (
    <section className="light-border background-light900_dark200 custom-scrollbar sticky right-0 top-0 flex h-screen w-fit flex-col  gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              href={`/question/${_id}`}
              key={_id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src={"/assets/icons/chevron-right.svg"}
                alt="chevron-arrow"
                height={20}
                width={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, totalQuestions }) => (
            <RenderTag
              key={_id}
              name={name}
              totalQuestions={totalQuestions}
              _id={_id}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
