"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"
import { getBasePath } from '../../utils/utils'

export function Hero() {
    return (
        <MotionTransition>          
            <div className="relative bg-cover bg-center z-0 h-[75vh] md:h-[100vh]" style={{ backgroundImage: `url(${getBasePath()}/assets/gradiant2.png)` }}>
                <div className="flex flex-col justify-center items-center h-full text-white">
                        <h3 className="text-center text-base md:text-xl lg:text-4xl font-light font-montserrat">We don’t do average, we do awesome</h3>
                        <Image
                            src={`${getBasePath()}/assets/PE_logo_white_1_.svg`} // Replace with your image path
                            alt="PROEDGE" // Provide an appropriate alt text
                            width={600} // Set the desired width
                            height={400} // Set the desired height
                        />
                        <p className="text-center text-xs md:text-sm lg:text-2xl font-montserrat">The perfect place to create brand awareness, community and social media capitalization.</p>
                </div>
            </div>
        </MotionTransition>
    )
}
