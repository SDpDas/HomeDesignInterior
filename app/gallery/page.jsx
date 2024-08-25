const page = () => {
    return(
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-4">
                <div>
                    <img className="h-auto max-w-auto rounded-lg hover:scale-90 transition-all" src="/image/badroom.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery2.jpg"/>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/swiper1.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery11.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/living.jpg"/>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery14.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery15.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery12.jpg"/>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery7.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/kitchen1.jpg"/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg hover:scale-90 transition-all" src="/image/gallery3.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default page;