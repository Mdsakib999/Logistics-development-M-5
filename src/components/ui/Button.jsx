import { Link } from "react-router";
export default function Button({ children, to, type = "primary" }) {
  // type primary secondary or whiteBtn
  return (
    <Link
      to={to}
      className={`flex items-center text-base justify-center w-[10.5rem] h-[3.25rem] rounded-md py-5 px-8 ${
        type === "primary"
          ? "bg-primary text-white hover:bg-white hover:border-2 hover:border-black hover:text-black"
          : type === "secondary"
          ? "bg-white text-[#3dc300]"
          : "bg-white text-black"
      }`}
    >
      {children}
    </Link>
  );
}
