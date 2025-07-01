const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 border font-montserrat text-lg leading-none cursor-pointer

    ${backgroundColor ? `{backgroundColor} ${textColor} ${borderColor}`
    : "bg-coral-red text-white border-coral-red"
    } rounded-full ${fullWidth && "w-full"}`}

    style={{paddingTop: '1rem', paddingBottom: '1rem', paddingLeft: '1.75rem', paddingRight: '1.75rem'}}>
        {label}

        {iconURL && <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5" 
        style={{marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem'}}
      />}
    </button>
  )
}

export default Button