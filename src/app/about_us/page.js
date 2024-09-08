import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#162542]">
                <div className="absolute inset-0">
                    <Image
                        className="w-full h-full object-cover"
                        src="/man-smile-wbook.png"
                        alt="Immigration"
                        width={1920}
                        height={1280}
                    />
                    <div className="absolute inset-0 bg-[#162542] opacity-75"/>
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-white text-center">
                        À propos de nous
                    </h1>
                    <p className="mt-6 text-lg text-[#C0B596] text-center max-w-3xl mx-auto">
                        Nous aidons les individus et les familles à réaliser leur rêve de vivre au Canada grâce à nos
                        services d&apos;immigration complets.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-[#C0B596] font-semibold tracking-wide uppercase">
                        Notre mission
                    </h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Transformer vos rêves en réalité
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Nous nous engageons à fournir des services d&apos;immigration de haute qualité pour aider nos clients
                        à réussir leur transition vers la vie au Canada.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#C0B596] text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 16h-1v-4h-1m0 0V9h1v1m0 0h1m-2 1v2m0-2h2v2m0 0h1m0 0V9m0 3V8a3 3 0 00-3-3h-1.5a3 3 0 00-3 3v1m6 3h-1v4h-1m0 0H9v-4H8"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                    Excellence
                                </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Nous visons toujours l&apos;excellence dans tous les aspects de notre travail pour garantir
                                la satisfaction de nos clients.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#C0B596] text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5h12M9 3v2M13 5v3m-4 5h8m2 0h4m-2-2v5m-6 0h6m-6-1h2"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                    Innovation
                                </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Nous adoptons des technologies et des idées innovantes pour simplifier le processus
                                d&apos;immigration de nos clients.
                            </dd>
                        </div>

                        <div className="relative">
                            <dt>
                                <div
                                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#C0B596] text-white">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M12 11V7m0 0L7.4 10.6a5 5 0 00-1.64 3.42m0 0L4 14m0 0H3v-1m0 0V7h1m0 1v7m0-3.5H4m1 0H4"/>
                                    </svg>
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                                    Collaboration
                                </p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">
                                Nous croyons en une approche collaborative pour atteindre des résultats exceptionnels
                                pour nos clients.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-[#C0B596] font-semibold tracking-wide uppercase">
                            Notre équipe
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Rencontrez nos experts
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Notre équipe est composée de professionnels dévoués et expérimentés, prêts à vous aider à
                            chaque étape de votre parcours d&apos;immigration.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
                                <Image
                                    className="w-32 h-32 rounded-full object-cover"
                                    src="/shadow-person.png"
                                    alt="Team Member"
                                    width={128}
                                    height={128}
                                />
                                <h3 className="mt-6 text-lg font-medium text-gray-900">Fatoumata Sow</h3>
                                <p className="mt-2 text-base text-gray-500">Assistante administrative</p>
                            </div>

                            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
                                <Image
                                    className="w-32 h-32 rounded-full object-cover"
                                    src="/shadow-person.png"
                                    alt="Team Member"
                                    width={128}
                                    height={128}
                                />
                                <h3 className="mt-6 text-lg font-medium text-gray-900">Poste en vogue</h3>
                                <p className="mt-2 text-base text-gray-500">Conseiller Guinea</p>
                            </div>

                            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
                                <Image
                                    className="w-32 h-32 rounded-full object-cover"
                                    src="/shadow-person.png"
                                    alt="Team Member"
                                    width={128}
                                    height={128}
                                />
                                <h3 className="mt-6 text-lg font-medium text-gray-900">Poste en vogue</h3>
                                <p className="mt-2 text-base text-gray-500">n/a</p>
                            </div>
                            <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-lg">
                                <Image
                                    className="w-32 h-32 rounded-full object-cover"
                                    src="/shadow-person.png"
                                    alt="Team Member"
                                    width={128}
                                    height={128}
                                />
                                <h3 className="mt-6 text-lg font-medium text-gray-900">Poste en vogue</h3>
                                <p className="mt-2 text-base text-gray-500">n/a</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;