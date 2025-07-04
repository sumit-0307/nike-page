import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
            src={footerLogo}
            width={150}
            height={46}
            />
          </a>
          <p
          className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"
          style={{marginTop: '1.5rem'}}
          >Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div 
          
          className="flex items-center gap-5 mt-8"
          style={{marginTop:'2rem'}}>
            {socialMedia.map((icon) => (
              <div 
              key={icon.alt}
              className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24} 
                />
              </div>
            ))}
          </div>
        </div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6"
                  style={{marginBottom:'1.5rem'}}>
                  {section.title} </h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li className="mt-3 text-white-400
                      font-montserrat leading-normal text-base hover:text-slate-gray
                      cursor-pointer"
                      style={{marginTop:'0.75rem'}}
                      key={link.name}>
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

          </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center"
      style={{marginTop:'6rem'}}>
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign}
           alt="copyright sign"
           width={20}
           height={20} 
           className="rounded-full"/>
           <p>Copyrights. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer