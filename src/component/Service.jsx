import React from 'react';

const Services = () => {
    const services = [
        {
            subtitle: 'Planifiez',
            title: 'Votre Consultation',
            description: 'Prenez rendez-vous facilement',
            icon: '📅'
        },
        {
            subtitle: 'Obtenez',
            title: 'Des Conseils',
            description: 'Consultation gratuite',
            icon: '💼'
        },
        {
            subtitle: 'Rejoignez',
            title: 'Votre destination',
            description: 'Opportunités de carrière',
            icon: '👥'
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row w-full justify-center  md:p-12 bg-[#F1F1F1]">
            {services.map((service, index) => (
                <div key={index} className="bg-white flex flex-row  py-5 md:p-0 lg:w-1/4 lg:mx-4">
                    <div className="flex flex-row justify-center items-center w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] lg:w-[28%] lg:h-[6rem] bg-[#C0B596]">
                        <div className="flex flex-row justify-center items-center w-1/2 h-[50%] bg-white" >
                            <div className=" w-[70%] h-[70%] bg-[#C0B596]"/>
                        </div>
                    </div>
                    <div className=" flex flex-col justify-center px-4">
                        <h2 className="text-[#C0B596] text-xl poppins-extralight-italic">{service.subtitle}</h2>
                        <p className="text-black text-2xl playfair-display-p0 capitalize tracking-wide">{service.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;