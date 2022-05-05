import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";

const Header = () => {
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  const searchInputRef = useRef();
  return (
    <header className="sticky top-0 bg-white ">
      <div className="flex items-center w-full py-6 px-2">
        <Image
          className="object-cover cursor-pointer"
          src="/googleImage.png"
          width={180}
          onClick={() => {
            router.push("/");
          }}
          height={70}
        />
        <form className="flex flex-grow border px-6 py-2 ml-7 mr-5 border-gray-200 shadow-lg max-w-3xl items-center rounded-full">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            type="text"
            placeholder={router.query.term}
          />
          <XIcon
            onClick={() => {
              searchInputRef.current.value = "";
            }}
            className="sm:mr-3 h-6 cursor-pointer transition duration-100 transform hover:scale-125"
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button onClick={search} className="hidden" type="submit">
            Search
          </button>
        </form>
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
