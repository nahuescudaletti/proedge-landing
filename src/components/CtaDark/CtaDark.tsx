import { useState } from 'react';

export function CtaDark() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    return (
        <div className="px-6 mb-20 md:mt-36">
            <div className="flex flex-col items-center text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-montserrat">
                    <span className="block degradedBlue bg-Orange">Newsletter</span>
                </h1>
                <p className="w-full mx-auto mt-5 text-base md:text-xl font-light font-montserrat tracking-wide text-center mb-10">
                    Receive our latest news directly in your inbox.
                </p>
                {/* Aquí reemplaza el formulario actual por el iframe de Sendinblue */}
                <iframe
                    width="540"
                    height="305"
                    src="https://c80e6f6d.sibforms.com/serve/MUIFAKZt-Gogyj2rlEofBZe06SxksMwFvqvjA-oohbbgmFQCHM5ALWtJGTQ_mQZrfJEukhRPgTGql4Gf_-hpB4kY9KzLHD2Alm-1JXx0-dm1_Bar-Z8YN8ScL9vfBLfVlaKYbaDFa4_fwNkYREXoVO4VyEuw1PwcwmTXmELk27tJ5eTGj17f5qdllmU07S1FM87NYncK_cpSaVt3"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                ></iframe>
            </div>

            {showSuccessModal && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-green-500 p-8 rounded shadow-lg text-center">
                        <p className="text-lg font-semibold mb-2">Subscription Successful!</p>
                        <p>You will receive our latest news shortly.</p>
                    </div>
                </div>
            )}
        </div>
    );
}
