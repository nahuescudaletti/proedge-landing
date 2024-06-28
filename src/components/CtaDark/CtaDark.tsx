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
                {/* Aquí reemplaza el iframe anterior por el nuevo iframe de Sendinblue */}
                <iframe
                    width="540"
                    height="305"
                    src="https://c80e6f6d.sibforms.com/serve/MUIFAG1Of-K8CkXwB9hXXkhIeK4GdTyQJ5RojR0kMTKLkQ7z6PSeaOaUiZvyV0dG6-RTpyZHCPRcyb9xYkxvWpDcXf2T5YFYVzyyGyefYz03Gb6s99fvfTY-a24Ta3MQC6OiEnrabBMXSEj-u8K0o9Lvy6jvMmud4gA9lCL0kuaIUraOMXF_aiRP3If2bREo8unl3aDolojKsn1X"
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
