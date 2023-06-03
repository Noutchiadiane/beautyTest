

const Button = (props) => {
  const {  icon, bgColor, color, bgHoverColor, size, text,textColor, borderRadius, width, additionalStyle } = props;
  return (
    <button
      type="button"
    
      style={{ color, borderRadius }}
      className={`relative rounded-[10px] font-semibold shadow-2xl border-transparent cursor-pointer  ${additionalStyle} btn-box ${bgColor} ${textColor} text-${size}   p-2 gap-x-3 `}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
