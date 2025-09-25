import { Link } from "react-router";
export default function Button({ children, to, type = "primary" }) {
  // type primary secondary or whiteBtn
  return (
    <Link
      to={to}
      className={`flex items-center border-2 ease-in-out duration-300  text-base justify-center w-max h-[3.25rem] rounded-md py-5 px-8 ${
        type === "primary"
          ? "bg-primary text-white border-black hover:bg-white  hover:border-black hover:text-black"
          : type === "secondary"
          ? "bg-white text-[#3dc300] gap-4 w-max hover:bg-black hover:border-white border-1 hover:text-white"
          : "bg-white text-black hover:border-2 hover:bg-black hover:text-white hover:border-white"
      }`}
    >
      {children}
    </Link>
  );
}
