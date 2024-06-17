"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"
import { getBasePath } from '../../utils/utils'


export function Hero() {
    return (
        <div className="relative h-screen bg-cover bg-center z-0" style={{ backgroundImage: `url(${getBasePath()}/assets/gradient.png)` }}>
            <div className="flex flex-col justify-center items-center h-full text-white">
                <Reveal>
                    <h3 className="text-center text-base md:text-xl lg:text-3xl font-light font-montserrat">We don’t do average, we do awesome</h3>
                </Reveal>
                <Reveal>
                    <Image
                        src={`${getBasePath()}/assets/PE_logo_white_1_.svg`} // Replace with your image path
                        alt="PROEDGE" // Provide an appropriate alt text
                        width={500} // Set the desired width
                        height={300} // Set the desired height
                    />
                </Reveal>
                <Reveal>
                    <p className="text-center text-xs md:text-sm lg:text-base font-montserrat">The perfect place to create brand awareness, community and social media capitalization.</p>
                </Reveal>
            </div>
        </div>
    )
}
