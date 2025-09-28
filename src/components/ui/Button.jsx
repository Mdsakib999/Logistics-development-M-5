import { Link } from "react-router";
export default function Button({ children, to, type = "primary" }) {
  // type primary secondary or different
  return (
    <Link
      to={to}
      className={`flex items-center ease-in-out duration-300 transition-all  text-base justify-center w-max h-[3.25rem] rounded-md py-5 px-8 ${
        type === "primary"
          ? "bg-primary text-white border-black hover:bg-secondary  hover:border-secondary hover:text-black"
          : type === "secondary"
          ? "bg-white text-black gap-4 w-max hover:text-black hover:bg-secondary"
          : type === "different"
          ? "hover:bg-white hover:text-black bg-black text-white"
          : ""
      }`}
    >
      {children}
    </Link>
  );
}
