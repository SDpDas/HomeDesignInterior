'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { titleVariants, desVariants, tagVariants } from "../utils/animation"


const posts = [
    {
        id: 1,
        title: "Boost your conversion rate",
        href: '#',
        description: 'HOMES turned our vision into reality.The teams creativity and attention to detail made our home more beautiful than we could have ever imagined. They truly listened to our needs and delivered a space that reflects our style perfectly. We couldn&#39t be happier!',
        date: '22 July, 2024',
        dateTime: '22-06-2024',
        category: { title: '4.7', href: "#" },
        author: {
            name: 'Emily',
            role: 'Co-Founder',
            href: "#",
            imageUrl:
            '/image/profile1.jpg'
        },
    },
    {
        id: 2,
        title: "Boost your conversion rate",
        href: '#',
        description: 'We were blown away by the transformation of our living space. HOMES took the time to understand our preferences and needs, and the results are stunning. The process was seamless, and the final design exceeded our expectations. We are thrilled with our new home!',
        date: '22 July, 2024',
        dateTime: '22-06-2024',
        category: { title: '4.9', href: "#" },
        author: {
            name: 'Michael',
            role: 'Co-Founder / CEO',
            href: "#",
            imageUrl:
            '/image/profile2.jpg'
        },
    },
    {
        id: 3,
        title: "Boost your conversion rate",
        href: '#',
        description: 'HOMES brought a fresh perspective to our renovation project. They managed to create a space that is not only beautiful but also highly functional for our family. The design process was smooth, and the team was always available to answer our questions. We couldn&#39t be more pleased!',
        date: '22 July, 2024',
        dateTime: '22-06-2024',
        category: { title: '4.2', href: "#" },
        author: {
            name: 'George',
            role: 'Co-Founder / CTO',
            href: "#",
            imageUrl:
            '/image/profile3.jpg'
        },
    },
]

export default function ContactSection() {
    return(
        <div className="pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.h2 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVariants}
                className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Customer Reviews
                </motion.h2>

                <motion.p
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants} 
                className="mt-2 text-lg leading-8 text-muted-foreground">
                    Learn how to grow your business with our expert advice
                </motion.p>

                <motion.div 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVariants}
                className="mx-auto mt-1 grid lg:grid-cols-3 gap-x-8 lg:max-w-none lg:mx-0
                sm:py-16 sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16 ">
                    {
                        posts.map((post) => (
                            <article
                            key={post.id}
                            className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <time dateTime="post.dateTime">
                                        <Image src="/image/star.svg" alt="These aren't real xD" width={80} height={5}/>
                                    </time>
                                    <a 
                                    href={post.category.href}
                                    className="relative z-10 bg-primary rounded-full text-white
                                    px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                                    >
                                        {post.category.title}
                                    </a>
                                </div>

                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6
                                    group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span>{post.title}</span>
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6
                                    text-muted-foreground">
                                        {post.description}
                                    </p>
                                </div>

                                <div className="relative mt-8 flex-items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="profile" className="h-10 w-10 rounded" />
                                    <div className="text-sm-leading-6">
                                        <p className="font-semibold">
                                            <a href={post.author.href}>
                                                <span>
                                                    {post.author.name}
                                                </span>
                                            </a>
                                        </p>
                                        <p className="text-muted-foreground">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))
                    }
                </motion.div>
            </div>
        </div>
    )
}