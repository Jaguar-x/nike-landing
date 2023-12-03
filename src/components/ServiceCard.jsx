
const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24}/>
        </div>
        <h3 className="font-semibold text-black leading-normal mt-5 font-palanquin text-3xl">{label}</h3>
        <p className="mt-3 break-words text-lg text-slate-gray leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard