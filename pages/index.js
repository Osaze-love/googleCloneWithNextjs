import Head from "next/head";
import { useRef } from "react";
import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const send = (e) => {
    e.preventDefault();
    const inputRefValue = inputRef.current.value;
    console.log(inputRefValue);
    if (!inputRefValue) return;

    router.push(`/search?term=${inputRefValue}`);
  };
  const inputRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <header className="flex space-x-4 justify-end mx-7 my-4 text-sm text-gray-700 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>

        <ViewGridIcon className="h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        <Avatar url="https://images.pexels.com/photos/11063076/pexels-photo-11063076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </header>
      <form className="flex flex-col items-center justify-center">
        <Image
          src="/googleImage.png"
          height="200"
          width="370"
          alt="bannerImage"
          className="object-cover"
        />
        <div className="flex items-center w-full bg-white-900 mt-5 rounded-full border border-gray-200 hover:shadow-lg justify-center max-w-md px-4 p-2 focus-within:shadow-lg md:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 text-gray-700" />
          <input
            ref={inputRef}
            type="text"
            className=" p-1 focus:outline-none  flex-grow"
          />

          <MicrophoneIcon className="h-5 text-gray-400" />
        </div>
        <div className="mt-4 flex flex-col w-1/2 space-y-2  justify-center sm:space-y-1 md:flex-row md:space-y-0  md:space-x-2">
          <button onClick={send} className="btn ">
            Google Search
          </button>
          <button onClick={send} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
}
