"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex max-w-[100vw] overflow-y-auto mt-[96px] lg:mt-0 overflow-x-hidden justify-center items-center h-full min-h-[calc(100vh-108px)]">
        <section className="w-full flex mb-5 lg:mb-0 lg:mt-0 flex-col lg:flex-row items-center justify-between lg:px-8 px-4 xl:px-16">
          <div className="lg:hidden flex flex-col items-center justify-center">
            <img
              draggable="false"
              className="rounded-3xl active:opacity-[98%] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer size-[170px]"
              src="http://localhost:3001/pekky.svg"
            />
          </div>
          <div className="flex flex-col mt-9 lg:mt-0 text-start items-start justify-center">
            <h1 className="font-bold leading-10 md:leading-normal text-[36px] lg:text-[42px] xl:text-[46px]">
              $PEKKY to the Moon
            </h1>
            <h2 className="font-medium leading-7 text-xl">
              Basic description whatever you
              <br /> like lorem ipsum dolor sit amet...
            </h2>
            <div className="mt-4">
              <button className="font-semibold text-lg px-5 text-white active:scale-[0.98] transition-all ease-linear duration-100 hover:bg-yellow-500/80 active:bg-yellow-500/90 bg-yellow-500/70 py-2.5 rounded-2xl">
                Join now
              </button>
            </div>
          </div>
          <div className="lg:flex hidden flex-col mr-20 items-center justify-center">
            <img
              draggable="false"
              className="rounded-3xl active:opacity-[98%] size-[280px] active:scale-[0.95] transition-all ease-linear duration-100 cursor-pointer"
              src="http://localhost:3001/pekky.svg"
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
}
