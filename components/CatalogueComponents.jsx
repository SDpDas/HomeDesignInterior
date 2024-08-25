import { Description } from "@radix-ui/react-dialog";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "next/image";

export default function CatalogueSection() {
    const items = [
        {
            id: "01",
            category: "BEDROOM SETUP",
            title: "Cosy Bedroom Setup",
            image: "/image/badroom.jpg",
            description: "family bedroom with a comfortable design for your family"
        },
        {
            id: "02",
            category: "KITCHEN SETUP",
            title: "Neat and Clean Kitchen",
            image: "/image/kitchen1.jpg",
            description: "family kitchen with a comfortable design for your family"
        },
        {
            id: "03",
            category: "DRAWING SETUP",
            title: "Family Drawing Room",
            image: "/image/drowing.jpg",
            description: "family drawing room with a comfortable design for your family"
        },
        {
            id: "04",
            category: "LIVING SETUP",
            title: "Neat and Clean Kitchen",
            image: "/image/living.jpg",
            description: "family living room with a comfortable design for your family"
        },
    ]

    return(
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 lg:gap-0 divide-gray-300 lg:divide-x">
            {
                items.map((item) => (
                    <div key={item.id}
                    className="relative overflow-hidden group"
                    >
                        <div>
                            <Image 
                            src={item.image}
                            width={380}
                            height={100}
                            alt=""
                            className="w-full"
                            style={{objectFit: "cover"}}
                            />    
                        </div>

                        <div className="absolute top-0 p-8 bg-white text-black bg-opacity-60 backdrop-blur
                        m-12">
                            <div className="flex justify-between pb-4">
                                <p className="text-sm">{item.category}</p>
                                <span className="text-sm">{item.id}</span>
                            </div>
                            <a className="block text-ul font-semibold" href="">{item.title}</a>
                            <p className="py-4">{item.description}</p>
                            <a className="inline-flex items-center font-medium" href="">See Details 
                                <TbArrowNarrowRight className="ml-2"/>
                            </a>
                        </div>

                        <div className="inset-0 bg-tertiary flex-col items-center justify-end 
                        md:flex md:absolute gap-32 pb-16 text-xl transition duration-300 
                        ease-in-out border-b-2 group-hover:-translate-y-full md:border-b-0 hidden">
                            <p className="tracking-wider -rotate-90">{item.category}</p>
                            <span>{item.id}</span>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}