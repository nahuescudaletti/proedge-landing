"use client";
import { useEffect } from 'react';
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import ContactForm from '../ContactForm';
import { BackgroundRadialLeft } from '@/components/BackgroundRadialLeft';
import { BackgroundRadialRight } from '@/components/BackgroundRadialRight';

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams?.get('title') || '';
    const description2 = searchParams?.get('description2') || '';

    const descriptionParagraphs = description2
        ? description2.split('. ').map((paragraph, index, array) => {
            const paragraphWithPeriod = index < array.length - 1 ? `${paragraph}.` : paragraph;
            return <p key={index} className="text-white text-base md:text-lg mb-4">{paragraphWithPeriod}</p>;
        })
        : null;

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component is mounted
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <BackgroundRadialLeft />
            <BackgroundRadialRight />
            <div className="backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-6 w-full text-center relative">
                <button
                    onClick={() => {
                        router.back();
                        window.scrollTo(0, 0); // Ensure scrolling to the top
                    }}
                    className="absolute top-4 left-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline flex items-center"
                >
                    <FaArrowLeft className="mr-2" /> Back
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Title and Description */}
                    <div className="flex flex-col items-center lg:items-start mt-16">
                        <h1 className="text-4xl font-bold text-white mb-6 degradedBlue bg-OrangeLight font-montserrat">{title}</h1>
                        <div className="w-full text-left">
                            {descriptionParagraphs}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex flex-col items-center lg:items-stretch mt-8 lg:mt-0">
                        <div className="">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
