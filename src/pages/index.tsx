import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>SWM - Electron App with Next.js 14, TypeScript and PWA</title>
      </Head>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <Image src="/swm-logo.jpeg" alt="logo" width={200} height={200} className="rounded-full" />
        <h1 className="text-6xl text-white font-bold mb-4 animate-pulse">
          Software Magicians
        </h1>
        <p className="text-white text-lg">
          Electron app with Next.js 14, TypeScript and PWA
        </p>
        <p className="fixed inset-x-0 bottom-0 text-center mb-8 text-white opacity-40">
          Copyright &copy; 2024 Software Magician. All right Reserved.
        </p>
      </div>
    </Fragment>
  );
}
