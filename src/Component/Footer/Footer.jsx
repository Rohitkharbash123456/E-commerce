import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLocationArrow, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


const FooterLinks = [
  {
    title: "Home",
    link: "/#"
  },
  {
    title: "About",
    link: "/#About"
  },
  {
    title: "Contact",
    link: "/#Contact"
  },
  {
    title: "Shop",
    link: "/#Blogs"
  },
]

const Footer = () => {
  return (
    <>
     
        <div className="">
          <div className="grid md:grid-cols-3 pb-20 pt-5">
            {/*company details*/}
            <div className='py-8 px-4 text-left'>
              <a href="#" className='text-red-500 font-semibold tracking-widest text-2xl uppercase sm:text-3xl text-left'>
                Eshop
              </a>
              <p className='text-gray-600 lg:pr-24 pt-3  '>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas molestiae quo vero accusantium eveniet
                et fuga provident maiores laudantium possimus rerum tempora consectetur deleniti omnis totam laborum libero at?
              </p>
              <p className='text-gray-500 mt-4'>By Preeti Verma</p>
              <a href="#" className='inline-block bg-red-500 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit Website</a>
            </div>
            {/*footer links*/}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
              <div className='py-8 px-4 text-left'>
                <h1 className='text-xl  font-bold sm:text-left mb-3'>Important Links</h1>
                <ul className='space-y-3'>
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                        className='text-gray-400  hover:text-black duration-200'>{data.title}</a>
                    </li>
                  ))}

                </ul>
              </div>


              {/*third col*/}

              <div className='py-8 px-4 text-left'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                <ul className='space-y-3'>
                  {FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link}
                        className='text-gray-400  hover:text-black duration-200'>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/*forth col*/}
              <div className='py-8 px-4 col-span-2 sm:col-auto'>
            
              <h1 className='text-xl font-bold sm:text-left mb-3'>Address Links</h1>
                <div>
                      <div className="flex items-center gap-3 ">
                        <FontAwesomeIcon icon = {faLocationArrow }></FontAwesomeIcon>
                        <p>Hisar</p>
                      </div>
                      <div className='flex items-center gap-3 mt-6'>
                       <FontAwesomeIcon icon = {faMobileAlt}/>
                        <p>+91 1234567890</p>
                      </div>
                      {/*social icons*/}
                      <div className='flex items-center gap-3 mt-6'>
                        <a href = "#">
                        <FontAwesomeIcon  icon = {faInstagram} className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href = "#">
                        <FontAwesomeIcon  icon =  {faFacebook} className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href = "#">
                        <FontAwesomeIcon  icon = {faLinkedin} className='text-3xl hover:text-primary duration-300'/>
                        </a>
                      </div>
                    </div>
                  </div></div>
          </div> </div>
        </>
        )
}

        export default Footer