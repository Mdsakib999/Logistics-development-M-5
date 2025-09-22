export default function Paragraph({
  children,
  align = "left",
  lineHeight = "relaxed",
  fontSize = "normal",
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
  return (
    <p
      className={`text-[#808380] ${alignClasses[align]} ${lineHeightClasses[lineHeight]} ${fontSizeClasses[fontSize]}`}
    >
      {children}
    </p>
  );
}
