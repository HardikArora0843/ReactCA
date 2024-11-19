import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { staggerFadeInOut } from '../animation';
// import { IoFastFood } from '../assets/icons';
import { statuses } from '../utils/styles';
import { IoStorefrontSharp } from '../assets/icons';
import SliderCard from './SliderCard';


const FilterSection = () => {
    const [category, setCategory] = useState("Dairy & Bakery");
    const products = useSelector((state) => state.products);

  return (
    <motion.div  className="w-full flex items-start justify-start flex-col">
        <div className=" w-full flex items-center justify-between ">
            <div className="flex flex-col items-start justify-start gap-1">
                <p className="text-2xl text-headingColor font-bold">
                    Hot Deals
                </p>
                <div className="w-40 h-1 rounded-md bg-orange5"></div>
            </div>
        </div>
         
       <div className='w-full overflow-x-scroll pt-6 flex items-center justify-center gap-6 py-8'>
       {statuses &&
          statuses.map((data, i) => (
            <FilterCard
              data={data}
              category={category}
              setCategory={setCategory}
              index={i}
            />
          ))}
        
       </div>

       <div className=" w-full flex items-center justify-evenly flex-wrap gap-4 mt-12 ">
        {products &&
          products
            .filter((data) => data.product_category === category)
            .map((data, i) => <SliderCard key={i} data={data} index={i} />)}
      </div>

    </motion.div>
  )
}

export const FilterCard = ({data, index, category, setCategory}) => {
    return (
        <motion.div key={index} {...staggerFadeInOut(index)} 
        onClick={() => setCategory(data.category)}
        className={`group w-28 min-w-[128px] cursor-pointer rounded-md py-6
        ${ category === data.category ? "bg-red5": "bg-primary"}
        hover:bg-red5 shadow-md flex flex-col items-center justify-center gap-4
        `}>
            <div className={`w-10 h-10 rounded-md shadow-md flex items-center group-hover:bg-primary
              ${
                category === data.category ? "bg-primary" : "bg-red5"
              }`}
            >
              <IoStorefrontSharp
                className={`${
                  category === data.category ? "text-red5" : "text-primary"
                } group-hover:text-red5`}
              />
            </div>
            <p
              className={`text-xl font-semibold ${
                category === data.category ? "text-primary" : "text-textColor"
              } group-hover:text-primary`}
            >
              {data.title}
            </p>
        </motion.div>
    )
}

export default FilterSection