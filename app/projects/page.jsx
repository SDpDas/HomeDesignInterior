'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from '@/utils/animation';

const projects = [
    {
        id: 1,
        name: 'Drawing room for family time',
        description: 'The drawing room, often considered the heart of the home, is where elegance meets comfort. It is a space designed for relaxation, conversation, and entertaining guests. In this beautifully curated drawing room, every detail has been thoughtfully selected to create an atmosphere of warmth and sophistication.',
        image: '/image/project3.jpg',
        link: 'https://ansainteriors.com/portfolio/residential-projects/drawing-room-designs/'
    },
    {
        id: 2,
        name: 'Kitchen for fine dining',
        description: 'The kitchen is the heart of the home, where culinary creativity comes to life and cherished moments are made. Designed for both functionality and style, this kitchen is a perfect blend of modern convenience and timeless elegance.',
        image: '/image/project2.jpg',
        link: 'https://www.housebeautiful.com/room-decorating/kitchens/g623/beautiful-designer-kitchens/'
    },
    {
        id: 3,
        name: 'Living room for lounge & welcome',
        description: 'The living room is the soul of the home — a place where comfort meets style, and relaxation harmonizes with elegance. This beautifully designed living room is a perfect blend of functionality and aesthetic appeal, creating a space that is both inviting and inspiring.',
        image: '/image/project4.png',
        link: 'https://www.houzz.in/photos/indian-living-room-design-ideas-phbr1-bp~t_26341~s_27014'
    },
    {
        id: 4,
        name: 'Bedroom for sleep & relaxation',
        description: 'The bedroom is a serene sanctuary, a private retreat designed for rest, relaxation, and rejuvenation. This beautifully designed bedroom combines comfort with style, creating an atmosphere that is both soothing and inviting.',
        image: '/image/gallery1123_project1.jpg',
        link: 'https://www.livspace.com/in/design-ideas/bedrooms'
    }
];

const Page = () => {
    return(
        <div>
            <div>
                <div className="bg-[url('/image/backgroundproject.jpg')]">
                    <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={titleVariants}
                    >
                        <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white"> Our Projects </h1>
                    </motion.div>
                </div>
            </div>

            <div className="container grid lg:grid-cols-2 gap-8 py-8">
                {
                    projects.map((project) => (
                        <div key={project.id} className="relative overflow-hidden rounded-xl group">
                            <div>
                                <Link href={project.link} target="blank" rel="noopener noreferrer" passHref>
                                        <motion.div
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        variants={desVariants}
                                        >
                                            <Image src={project.image.trim()} width={480} height={380} alt={project.name} 
                                            className="w-full" />
                                        </motion.div>
                                </Link>
                            </div>
                            <div 
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={tagVariants}
                            className="absolute bottom-0 right-0 bg-white/90 dark:bg-black/40
                            flex-col items-center justify-end w-96 gap-32 p-12 text-xl 
                            transition duration-300 ease-in-out translate-y-full from-transparent
                            to-black group-hover:translate-y-0">
                                <h1 className="text-2xl font-semibold">{project.name}</h1>
                                <p className="py-4">{project.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Page;
