import { Link } from "react-router";
export default function Button({ children, to, type = "primary" }) {
  // type primary secondary or whiteBtn
  return (
    <Link
      to={to}
      className={`flex items-center text-base justify-center w-[10.5rem] h-[3.25rem] rounded-md py-5 px-10 ${
        type === "primary"
          ? "bg-primary text-white"
          : type === "secondary"
          ? "bg-white text-[#3dc300]"
          : "bg-white text-black"
      }`}
    >
      {children}
    </Link>
  );
}
