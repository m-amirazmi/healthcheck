import React from "react";
import Head from "next/head";
import Link from "next/link";
import { routesClinic } from "../utils/routesClinic";
import { useRouter } from "next/dist/client/router";
import { UserCircle } from "./icons";

export default function ClinicLayout({ children }) {
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>Clinic</title>
      </Head>
      <div className="grid grid-cols-12">
        <div className="md:col-span-2 md:block col-span-10 hidden bg-white h-screen">
          <div className="m-5 py-10">
            {/* <h1 className="text-center text-4xl p-5 text-purple-300">HC</h1> */}
            <div className="flex flex-col uppercase text-gray-500">
              {routesClinic.map((route) => {
                const active =
                  pathname === route.path
                    ? "shadow-lg bg-purple-500 text-purple-50 rounded-md"
                    : "hover:text-purple-900";
                return (
                  <Link key={route.path} href={route.path}>
                    <a className={`${active} flex items-center my-1 px-4 py-2`}>
                      <route.icon />
                      <span className="ml-2">{route.name}</span>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:col-span-7 md:block col-span-12 bg-gray-50 h-screen">
          <div className="mx-5">
            <div className="sticky top-3 w-100 flex bg-white text-purple-700 shadow-md my-3 rounded-md p-3">
              <div className="ml-auto">
                <p>Muhamad Amir</p>
              </div>
              <div className="ml-2">
                <UserCircle />
              </div>
            </div>
            {children}
          </div>
        </div>
        <div className="md:col-span-3 md:block col-span-12 hidden bg-white h-screen">
          This right sidebar
        </div>
      </div>
    </div>
  );
}
