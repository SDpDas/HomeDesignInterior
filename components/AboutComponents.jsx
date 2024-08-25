'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "@/utils/animation"

const AboutComponents = () => {
    return(
        <div className='container py-12 xl:py-24 h-[auto]'>
            <div className="grid lg:grid-cols-2 place-items-center">
                <motion.div
                initial="offscreen"
                whileInView={"onscreen"} 
                variants={titleVariants}
                className="px-4 py-2"
                >
                    <Image 
                    src="/image/aboutfront.png"
                    width={600}
                    height={500}
                    alt="About"
                    className="max-md:hidden"
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                    />
                </motion.div>

                <div className="items-center">
                    <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={titleVariants}
                    className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl">
                        One of the best companies in this business.
                    </motion.h2>

                    <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={desVariants} 
                    className="px-12 tracking-wider uppercase text-gray-400 mt-3">
                        World Award
                    </motion.p>

                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={tagVariants}
                    className="px-12 pb-4 mt-4">
                    With 10+ years of experience in the industry, we specialize in both residential and commercial interior design, 
                    offering a full range of services from concept development to final installation.
                    </motion.p>
                    
                    <motion.p
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={tagVariants} 
                    className="px-12 pb-4 mt-4">
                    Our award-winning team combines creativity and expertise to deliver outstanding results, transforming houses into dream homes.
                    We are honored to have received numerous accolades for our dedication to excellence and our impact on the home design industry.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponents;