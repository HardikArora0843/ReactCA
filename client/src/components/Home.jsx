import React from 'react'
import {motion} from 'framer-motion'
import { Delivery, Herobg} from '../assets'
import { buttonClick, staggerFadeInOut } from '../animation'
import { randomData } from '../utils/styles'
import { HiCurrencyRupee } from '../assets/icons'
function Home() {
  return (
    <motion.div   className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex flex-col items-start justify-start gap-6">
            <div className="px-4 py-1 flex items-center justify-center gap-2 bg-orange1 rounded-full">
                <p className="text-lg font-semibold text-orange5">Free Delivery</p>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary shadow-md">
                    <img 
                        src={Delivery} 
                        alt="" 
                        className="w-full h-full object-contain" 
                    />
                </div>                
            </div>

            <p className="text-[40px] text-headingColor md:text-[72px] font-sans font-extrabold tracking-wider" >
                The Fastest Delivery in 
                <span className="text-orange6">Your City</span>
            </p>

            <p className='text-textColor text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempore! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, tempore!
                
            </p>
            <motion.button
                {...buttonClick}
                className="bg-gradient-to-bl from-orange4 to-orange6 px-4 py-2 rounded-xl text-black text-base font-semibold"
            >
                    Order Now
            </motion.button>

        </div>
        <div className="py-2 flex-1 flex items-center justify-end relative">
            <img
                className='absolute top-0 right-0 md:-right-12 w-full h-420 md:w-auto md:h-650 '
                src={Herobg}
                alt=""
            />   

            <div className='w-full md:w-460 ml-0 flex flex-wrap items-center justify-center gap-4 gap-y-14'>
                {randomData && randomData().map((data, i) => (
                    <motion.div
                        key={i}
                        {...staggerFadeInOut(i)}
                        className=" w-32 h-36 md:h-auto  md:w-190 p-4 bg-lightOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                    >
                        <img
                            src={data.imageURL}
                            className="w-12 h-12 md:w-32 md:h-32 md:-mt-16 object-contain "
                            alt=""
                        />
                        <p className="text-sm lg:text-xl font-semibold text-textColor">
                        {data.product_name.slice(0, 14)}
                        </p>

                        <p className="text-[12px] text-center  md:text-base text-lighttextGray font-semibold  capitalize">
                        {data.product_category}
                        </p>

                        <p className="text-sm  font-semibold text-headingColor flex items-center justify-center gap-1">
                            <span className="text-xs text-red6" >
                            <HiCurrencyRupee  />{" "}
                            </span>
                           {parseFloat(data.product_price).toFixed(2)} 
                        </p>

                    </motion.div>
                ))}

            </div>

        </div>
    </motion.div>
  )
}

export default Home