"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                Looks like something went wrong
              </h1>
              <p className="my-2 text-gray-800">
                Sorry about that! Please try again
              </p>
              <button
                className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-marvelRed text-white hover:bg-marvelGrey hover:text-black focus:outline-none focus:ring-2 focus:ring-marvelGrey focus:ring-opacity-50"
                onClick={() => reset()}
              >
                Reload
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="Disconnected"
          height={505}
          width={375}
        />
      </div>
    </div>
  );
}
