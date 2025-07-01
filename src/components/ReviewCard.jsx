import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'
    style={{marginTop: '3rem'}}>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center info-text'
      style={{marginTop:'1.5rem'}}>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'
      style={{marginTop:'0.75rem'}}>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'
      style={{marginTop:'0.25rem'}}>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;