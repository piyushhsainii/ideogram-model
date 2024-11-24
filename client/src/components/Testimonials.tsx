import React from 'react'
import BlurFade from './ui/blur-fade'
import { Marquee } from './ui/Marquee'
import { ReviewCard } from './ReviewsCards/ReviewCard'
import { AllReviews } from "../lib/interface";

const Testimonials = ({ reviews }: { reviews: AllReviews[] }) => {
    return (
        <div className='bg-black flex flex-col items-center justify-center   m-auto '>
            {reviews &&
                <div className='max-w-[1200px] w-[100%]  overflow-hidden'>
                    <div className="text-gray-300 font-sans text-3xl font-semibold py-5 text-center ">
                        TESTIMONIALS
                    </div>
                    <BlurFade inView className="" >
                        <Marquee className="[--duration:10s] ">
                            {reviews?.map((review) => (
                                <ReviewCard key={review.id} body={review.review} img={review.user.avatar_url} name={review.user.name} username={""} />
                            ))}
                        </Marquee>
                    </BlurFade>
                </div>
            }
        </div>
    )
}

export default Testimonials