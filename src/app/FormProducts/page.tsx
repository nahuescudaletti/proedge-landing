"use client";
import { getBasePath } from '@/utils/utils';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FormProducts() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const description2 = searchParams.get('description2');

    // Separate the description2 text by periods and convert it into paragraphs
    const descriptionParagraphs = description2
        ? description2.split('. ').map((paragraph, index, array) => {
            // Add the final period only if it is not the last paragraph
            const paragraphWithPeriod = index < array.length - 1 ? `${paragraph}.` : paragraph;
            return <p key={index} className="text-base md:text-lg mb-4">{paragraphWithPeriod}</p>;
        })
        : null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white bg-cover bg-center" style={{ backgroundImage: `url(${getBasePath()}/assets/gradient2.png)` }}>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h1 className="text-3xl md:text-4xl font-semibold mb-4">{title}</h1>
                    {descriptionParagraphs}
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <iframe
                        width="540"
                        height="305"
                        src="https://c80e6f6d.sibforms.com/serve/MUIFAIANeg5hlm3lehNXDXKjodziyeLnC8Pd-JFIovcnlLw0mwJg3ghiGeUx8uCkHm362EqU_7k03dPgBhy1_AB6wg4zFUbCI5CLP8Xubov-3MUlS7q68xgw1xN5q-H9K3H_f-MmOKUxXJSXNoR4VT_Dr5jVvhvWJzRU71nBvKhc0cCdn6pLJfGlnWroY2EnoO5QvOk09yPeAnn0"
                        frameBorder="0"
                        scrolling="auto"
                        allowFullScreen
                        style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                    ></iframe>
                </div>
            </div>
            <button
                onClick={() => router.back()}
                className="mt-20 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Go Back
            </button>
        </div>
    );
}
