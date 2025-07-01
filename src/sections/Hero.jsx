import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { shoes, statistics } from "../constants";
import {bigShoe1} from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section 
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    style={{paddingLeft: '4rem'}}
    >
      <div className="relative
      xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28"
      style={{paddingTop: '7rem'}}>
        <p className="text-xl font-montserrat text-coral-red"
        >Our Summer Collections</p>
        <h1 className="font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold"
        style={{ marginTop: '2.5rem' }}>
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10"
          style={{ paddingRight: '2.5rem' }}
          >The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3"
          style={{ marginTop: '1.25rem' }}
          >Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 sm:max-w-sm"
        style={{marginTop: '1.5rem', marginBottom: '3.5rem' }} 
        >Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Shop now" 
        iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16"
        style={{ marginTop: '5rem' }}>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl 
              font-palanquin font-bold "
              >{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

          <div className="relative flex-1 flex-container justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
          style={{paddingLeft: '6rem', paddingRight: '4rem', paddingTop: '7rem'}}
          >
            <img 
            src={bigShoeImg}
            alt="shoe collection"
            width={610}
            height={500}
            className="object-contain relative z-10"
            // style={{paddingTop: '7rem'}}
            />
            <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%]
            max-sm:padding-x"
            style={{
              bottom: '-5%',
            }}>
              {shoes.map((shoe) =>(
                <div key={shoe.bigShoe}>
                  <ShoeCard 
                  imgURL = {shoe}
                  changeBigShoeImage = {(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg = {bigShoeImg}
                  />
                </div>
              ))}
            </div>
          </div>

    </section>
  )
}

export default Hero