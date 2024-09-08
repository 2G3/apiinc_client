import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2D2D2D] text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 poppins-semibold">À propos</h3>
                    <p className="text-gray-400 poppins-extralight-italic">
                        Nous sommes une entreprise dédiée à fournir des solutions innovantes et de qualité pour répondre aux besoins de nos clients.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 poppins-semibold">Liens utiles</h3>
                    <ul>
                        <li><a href="#" className="text-gray-400 hover:text-white transition poppins-extralight-italic">Accueil</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition poppins-extralight-italic">Services</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition poppins-extralight-italic">Contact</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition poppins-extralight-italic">À propos</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 poppins-semibold">Suivez-nous</h3>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 poppins-semibold">Contact</h3>
                    <p className="text-gray-400 poppins-extralight-italic text-xs">9501 Ave. Christophe Colomb, Suite 205, Montréal, QC, Canada, H2N 2E3</p>
                    <p className="text-gray-400 poppins-extralight-italic text-xs">Email: info@apiinc.ca</p>
                    <p className="text-gray-400 poppins-extralight-italic text-xs">Téléphone: (438) 380-0606</p>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 pt-4 text-center text-gray-400">
                &copy; 2024 API.inc. Tous droits réservés.
            </div>
        </footer>
    );
};

export default Footer;