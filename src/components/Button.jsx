
const Button = ({ label, iconUrl ,backgroundColor,borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center gap-2 items-center px-7 py-4 border rounded-full font-montserrat
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : 'leading-none text-lg  bg-coral-red text-white border-coral-red'}
    ${fullWidth && 'w-full'}`}>
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
