const colorClasses = {
  white: "text-white",
  black: "text-black",
};
const lineHeightClasses = {
  tight: "leading-tight",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
};
const fontWeightClasses = {
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};
const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};
import {useState,useEffect} from 'react';
export default function Heading({
  children,
  className,
  lineHeight = "normal",
  color = "black",
  align = "left",
  fontWeight = "bold",
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1
      className={`uppercase max-w-2xl transition-all duration-1000 ease-out mb-4 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-  ${
        fontWeightClasses[fontWeight]
      } ${lineHeightClasses[lineHeight]} ${colorClasses[color]} ${
        alignClasses[align]
      }  + ${className || ""}        ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
      }`}
    >
      {children}
    </h1>
  );
}
