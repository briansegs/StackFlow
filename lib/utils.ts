import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - createdAt.getTime()) / 1000);

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      if (interval.label === "month") {
        const years = Math.floor(count / 12);
        const months = count % 12;
        if (years > 0 && months > 0) {
          return `${years} year${years > 1 ? "s" : ""} and ${months} month${months > 1 ? "s" : ""} ago`;
        } else if (years > 0) {
          return `${years} year${years > 1 ? "s" : ""} ago`;
        } else {
          return `${months} month${months > 1 ? "s" : ""} ago`;
        }
      } else {
        return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
      }
    }
  }

  return "just now";
};

export const formatBigNumber = (num: number): string => {
  if (num >= 1000000) {
    const formattedNum = (num / 1000000).toFixed(1);
    return `${formattedNum}M`;
  } else if (num >= 1000) {
    const formattedNum = (num / 1000).toFixed(1);
    return `${formattedNum}K`;
  } else {
    return num.toString();
  }
};

export const getMonthYear = (date: Date): string => {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};
