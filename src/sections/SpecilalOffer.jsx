import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecilalOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container "
    >
     <div
     className="flex-1"
     >
      <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div> 
      <div
      className="flex flex-1 flex-col "
      >
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg "
        style={{ marginTop: '2.5rem' }}>
         
        <span
        className="text-coral-red"> Special </span>
         Offer
          <br />
        </h2>
        <p className="mt-4 lg:max-w-lg info-text"
        style={{marginTop: '1rem'}} 
        >Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p
        className="mt-6 lg:max-w-lg info-text"
        style={{marginTop: '1.5rem'}}
        >Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4"
        style={{marginTop: '2.75rem'}}>

        <Button label="Shop Now" iconURL={arrowRight} />
        <Button
        label="Learn more" 
        backgroundColor= "bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray"
        />
      </div>
      </div>
    </section>
  )
}

export default SpecilalOffer