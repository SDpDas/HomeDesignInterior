'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TbArrowUpRight } from "react-icons/tb";
import { motion, useScroll, useTransform } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from '@/utils/animation';

const Page = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [.6, 1])
    return (
        <div>
            <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
                <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center
                lg:py-64">Who are we?</h1>
            </div>

            <div className="container">
                <div className="pt-4">
                    <motion.h2
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={titleVariants} 
                    className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl">
                        Pioneers of modern interior design and art
                    </motion.h2>

                    <motion.p 
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={desVariants}
                    className="text-2xl text-center font-medium pb-10 mt-5">
                    Founded in 2024 on the principles of creativity, functionality, and elegance, 
                    we specialize in creating bespoke interiors that harmoniously blend style and practicality. 
                    Whether it's a residential retreat, a commercial space, or a renovation project, 
                    we tailor our approach to meet your unique needs and preferences.
                    </motion.p>
                </div>

                <div className="items-center lg:flex gap-x-8">
                    {/* Left Image Section */}
                    <motion.div 
                    style={{scale}}
                    ref={ref}
                    className="w-full">
                        <Image src="/image/gallery1123.jpg" width={700} height={700} />
                    </motion.div>
 
                    {/* Right Content Section */}
                    <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"} 
                    variants={tagVariants} 
                    > 
                        <p className="pb-8 tracking-wide mt-6">
                        Interior design is defined as the professional and comprehensive practice of creating an interior environment that addresses, 
                        protects, and responds to human needs. It is the art, science, and business planning of a creative, technical, sustainable, 
                        and functional interior solution that corresponds to the architecture of a space, while incorporating process and strategy, 
                        a mandate for well-being, safety, and health, with informed decisions about style and aesthetics. <br /><br />

                        Nowadays, there is only interior design with computer-aided design or CAD. This technology is the backbone of the modern interior design process. 
                        These tools allow you to create detailed drawings, floor plans, and three-dimensional models. 3D modeling, in particular, 
                        has revolutionized how projects are visualized and presented to clients, offering a clearer and 
                        more realistic understanding of the final result. <br /><br />

                        <span className="text-xl font-extrabold tracking-tight">
                        3D printing is transforming how designers create and manufacture elements in interior spaces
                        </span>
                        </p>
                        <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
                            Read More <TbArrowUpRight className={`w-5 h-5 ml-2`} />
                        </Button>
                    </motion.div>
                </div>

                {/* Team Section */}
                <div className="lg:py-20">
                    <div className="pt-8 pb-4">
                        <motion.h1 
                        initial="offscreen"
                        whileInView={"onscreen"} 
                        variants={titleVariants} 
                        className="text-4xl font-bold tracking-wider text-center uppercase">Team</motion.h1>
                    </div>

                    <div className="grid py- gap-20 lg:grid-cols-3">
                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"} 
                        variants={titleVariants} 
                        className="border-2 border-primary">
                            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition
                            hover:-translate-y-3 hover:-translate-x-3">
                                <Image src="/image/profile2.jpg" width={200} height={200} alt='' className="mx-auto rounded-full"/>
                                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                                <p>
                                    Creativity is the ability to generate, create or discover new ideas, solutions and possibilities.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"} 
                        variants={desVariants} 
                        className="border-2 border-primary">
                            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition
                            hover:-translate-y-3 hover:-translate-x-3">
                                <Image src="/image/profile1.jpg" width={200} height={200} alt='' className="mx-auto rounded-full"/>
                                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                                <p>
                                    Creativity is the ability to generate, create or discover new ideas, solutions and possibilities.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div 
                        initial="offscreen"
                        whileInView={"onscreen"} 
                        variants={tagVariants} 
                        className="border-2 border-primary">
                            <div className="p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition
                            hover:-translate-y-3 hover:-translate-x-3">
                                <Image src="/image/profile3.jpg" width={200} height={200} alt='' className="mx-auto rounded-full"/>
                                <h2 className="py-4 text-2xl font-semibold uppercase">Building Surveys</h2>
                                <p>
                                    Creativity is the ability to generate, create or discover new ideas, solutions and possibilities.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default Page;
