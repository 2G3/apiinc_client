import React from 'react';

const ourExperts = [
    {
        id: 1,
        name: 'Avocat',
        position: 'Avocat en immigration',
        image: '/shadow-person.png',
    },
    {
        id: 2,
        name: 'Mohamed Diallo',
        position: 'Responsable administratif',
        image: '/shadow-person.png',
    },
    {
        id: 3,
        name: 'Dawood W. Barry',
        position: 'Responsable Technologique',
        image: '/shadow-person.png',
    },
    {
        id: 4,
        name: 'Ibrahima Bah',
        position: 'Responsable Marketing',
        image: '/shadow-person.png',
    },

];
const StaffSection = () => {
    return (
        <div className="px-8 py-28  md:p-32">
            <div className=" flex flex-col items-center">
                <h2 className="bar relative text-5xl text-[#222222] tracking-wider playfair-display-p0">
                    Nos Experts
                </h2>
            </div>
            <p className="mt-8 text-xl text-center text-[#656565] poppins-extralight-italic ">
                Une équipe de professionnels qualifiés et expérimentés.
            </p>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 mb-36">
                    {ourExperts.map((expert) => (
                        <div key={expert.id} className="flex flex-col items-center">
                            <img src={expert.image} alt={expert.name} className="w-full md:w-60 md:h-64 object-cover"
                                 width={240}
                                 height={240}
                            />
                            <h3 className="text-2xl text-[#222222] mt-4 playfair-display-p0">{expert.name}</h3>
                            <p className="text-[14.5px] text-[#656565] poppins-extralight-italic">{expert.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StaffSection;
