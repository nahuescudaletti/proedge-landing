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
                    <h3 className="text-xl md:text-3xl font-light font-montserrat mb-4">we don’t do average, we do awesome</h3>
                </Reveal>
                <Reveal>
                    <h1 className="text-4xl md:text-6xl font-bold font-montserrat mb-8">ProEdge</h1>
                </Reveal>
                <Reveal>
                    <p className="text-sm md:text-base font-montserrat">The perfect place to create brand awareness, community and social media capitalization.</p>
                </Reveal>
            </div>
        </div>
    )
}
