import React from 'react'

const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div
    className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'
    style={{paddingLeft:'2.5rem', paddingRight: '2.5rem', paddingTop: '4rem', paddingBottom: '4rem'}}
    >
        <div className='flex w-11 h-11 justify-center items-center bg-coral-red rounded-full'>
            <img src={imgURL} alt={label}
            width={24} height={24} />
        </div>
        <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'
        style={{marginTop: '1.25rem'}}>{label}</h3>
        <p
        className='mt-3 break-words font-montserrat text-lg leading-normal text-gray-500'
        >{subtext}</p>
        
    </div>
  )
}

export default ServiceCard