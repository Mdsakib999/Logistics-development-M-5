import {useEffect,useState} from 'react';
export default function Paragraph({
  children,
  align = "left",
  lineHeight = "relaxed",
  fontSize = "normal",
  className,
}) {
  const fontSizeClasses = {
    normal: "text-[16px]",
    lg: "text-lg",
    xl: "text-xl",
  };
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  const lineHeightClasses = {
    tight: "leading-tight",
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose",
  };
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <p
      className={`text-black opacity-80 font-text transition-all duration-1000 ease-out mb-4 ${
            isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          } ${alignClasses[align]} ${lineHeightClasses[lineHeight]} ${fontSizeClasses[fontSize]} + ${className || ''}`}
    >
      {children}
    </p>
  );
}
