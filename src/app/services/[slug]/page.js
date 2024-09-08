"use client";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const visaDetails = {
    "visa-de-visiteur": {
        title: "Visa de Visiteur",
        description: "Le visa de visiteur est nécessaire pour les séjours temporaires au Canada en tant que touriste. Vous pouvez visiter vos amis, votre famille, ou explorer le pays avec ce type de visa.",
        content: "Le visa de visiteur est conçu pour ceux qui souhaitent visiter le Canada à des fins temporaires, telles que le tourisme," +
            " la visite de la famille et des amis, ou la participation à des conférences et événements. Ce type de visa est idéal pour les voyageurs qui " +
            "veulent découvrir les merveilles naturelles du Canada, ses villes dynamiques, et sa riche culture. Les candidats potentiels incluent les touristes, les participants à des " +
            "événements professionnels ou culturels, et ceux qui souhaitent passer du temps avec leurs proches résidant au Canada. Le visa de visiteur vous permet de rester au Canada pour une " +
            "période déterminée, généralement jusqu'à six mois. Si vous cherchez à explorer le Canada sans avoir l'intention de travailler ou d'étudier de manière prolongée, ce visa est parfaitement adapté " +
            "à vos besoins. Contactez-nous pour en savoir plus sur la manière de soumettre votre demande.\n" +
            "\n",
    },
    "visa-detudiant": {
        title: "Visa d'Étudiant",
        description: "Le visa d'étudiant est requis pour les étudiants internationaux souhaitant étudier au Canada. Il vous permet de suivre des cours à temps plein dans des institutions reconnues.",
        content: "Le visa d'étudiant est destiné aux individus souhaitant poursuivre leurs études au Canada. Reconnu pour ses établissements d'enseignement de classe mondiale et ses " +
            "opportunités académiques variées, le Canada est une destination de choix pour les étudiants internationaux. Ce visa est approprié pour ceux qui ont été acceptés dans un programme " +
            "d'études dans une école, un collège, une université ou un autre établissement éducatif au Canada. Les profils idéaux pour ce visa incluent les étudiants de premier cycle, les " +
            "étudiants de cycles supérieurs, et ceux inscrits à des programmes de formation professionnelle. En plus de bénéficier d'une éducation de qualité, les étudiants peuvent également " +
            "profiter de la diversité culturelle et des expériences uniques que le Canada a à offrir. Pour savoir comment nous pouvons vous aider à réaliser votre rêve d'étudier au Canada, " +
            "n'hésitez pas à nous contacter.",
    },
    "visa-de-travail": {
        title: "Visa de Travail",
        description: "Le visa de travail est pour ceux qui souhaitent travailler au Canada de façon temporaire. Ce visa permet de prendre des emplois temporaires ou saisonniers.",
        content: "Le visa de travail est conçu pour les individus qui souhaitent venir au Canada pour y travailler temporairement. Le marché du travail canadien est dynamique et en constante " +
            "évolution, offrant de nombreuses opportunités pour les travailleurs qualifiés et non qualifiés. Ce visa est idéal pour ceux qui ont reçu une offre d'emploi temporaire d'un employeur " +
            "canadien. Il s'adresse à divers profils, allant des travailleurs spécialisés aux professionnels de divers secteurs, y compris la technologie, la santé, la construction et plus encore." +
            " Travailler au Canada vous permet de gagner une expérience précieuse, d'améliorer vos compétences et de vivre dans l'un des pays les plus accueillants et multiculturels au monde." +
            " Pour obtenir plus d'informations sur les possibilités de travail temporaire au Canada et sur la façon dont nous pouvons faciliter votre processus de demande, contactez-nous.",
    },
    "visa-de-residence-permanente": {
        title: "Visa de Résidence Permanente",
        description: "Le visa de résidence permanente est pour ceux qui souhaitent s'établir de façon permanente au Canada. Il offre de nombreux avantages et possibilités.",
        content: "Le visa de résidence permanente est destiné à ceux qui souhaitent s'établir au Canada de façon permanente. Ce visa ouvre les portes à une multitude d'avantages, y compris " +
            "l'accès à des services sociaux, une meilleure qualité de vie, et la possibilité de devenir citoyen canadien à terme. Il est idéal pour les travailleurs qualifiés, les investisseurs," +
            "les entrepreneurs, et les personnes ayant des liens familiaux au Canada. Les candidats typiques incluent ceux qui possèdent des compétences en demande dans le marché du travail " +
            "canadien, des entrepreneurs prêts à investir dans l'économie canadienne, et des membres de la famille de citoyens canadiens ou résidents permanents. Vivre au Canada en tant que " +
            "résident permanent offre une stabilité et une sécurité accrues pour vous et votre famille. Contactez-nous pour découvrir comment nous pouvons vous assister dans votre processus " +
            "de demande de résidence permanente.",
    },
    "visa-dimmigrant-daffaires": {
        title: "Visa d'Immigrant d'Affaires",
        description: "Le visa d'immigrant d'affaires est pour les entrepreneurs et investisseurs souhaitant immigrer au Canada. Ce visa permet de démarrer ou investir dans des entreprises.",
        content: "Le visa d'immigrant d'affaires est conçu pour les entrepreneurs, les investisseurs et les individus possédant des compétences commerciales et managériales souhaitant immigrer " +
            "au Canada. Ce visa est parfait pour ceux qui cherchent à investir dans l'économie canadienne, à créer de nouvelles entreprises ou à acquérir et gérer des entreprises existantes au " +
            "Canada. Les candidats idéaux sont les entrepreneurs ayant une expérience significative dans la gestion d'entreprises, les investisseurs disposés à investir des capitaux substantiels " +
            "dans des entreprises canadiennes, et les professionnels ayant des compétences spécialisées en gestion et en affaires. Immigrer au Canada en tant qu'homme ou femme d'affaires vous " +
            "permet non seulement de profiter d'un environnement économique stable et prospère, mais aussi de bénéficier de la qualité de vie exceptionnelle du Canada. Pour plus de détails sur ce " +
            "type de visa et comment nous pouvons vous aider à concrétiser vos projets d'affaires au Canada, contactez-nous.",
    },
    "programme-entree-express": {
        title: "Programme Entrée Express",
        description: "Le programme Entrée Express est pour les professionnels qualifiés utilisant le système Entrée Express. Ce programme accélère le processus d'immigration pour les travailleurs qualifiés.",
        content: "Le Programme Entrée Express est une voie rapide pour les professionnels qualifiés souhaitant immigrer au Canada. Ce programme est conçu pour les travailleurs qualifiés qui " +
            "possèdent les compétences et l'expérience nécessaires pour contribuer à l'économie canadienne. Les profils idéaux incluent les travailleurs dans des professions en demande, " +
            "les personnes ayant une expérience professionnelle qualifiée et ceux ayant des qualifications académiques reconnues. Le Programme Entrée Express évalue les candidats en fonction de " +
            "plusieurs critères, tels que l'âge, l'éducation, l'expérience de travail, et les compétences linguistiques. Ce programme offre une opportunité rapide et efficace pour obtenir la " +
            "résidence permanente au Canada. Si vous êtes un professionnel qualifié et que vous souhaitez vivre et travailler au Canada, contactez-nous pour savoir comment nous pouvons faciliter " +
            "votre processus d'immigration.",
    },
};

const Page = ({ params }) => {
    const { slug } = params;
    const service = visaDetails[slug];

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white">
            <div className="relative bg-[#162542]">
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold text-white text-center">{service.title}</h1>
                    <p className="mt-6 text-lg text-[#C0B596] text-center max-w-3xl mx-auto">{service.description}</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <div className="prose prose-lg max-w-none text-gray-500">
                        {service.content}
                    </div>

                    <div className="mt-10">
                        {/*<Link href="/user/signin">*/}
                        <span className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#C0B596] hover:bg-[#a89976] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C0B596]">
                            Vous pourrez bientôt faire une demande sur ce service
                        </span>
                        {/*</Link>*/}
                    </div>

                    {/* For small devices */}
                    <aside className="sm:hidden mt-8 flex flex-col items-center">
                        <h2 className="text-2xl font-extrabold text-gray-900">Autres services</h2>
                        <ul className="mt-4 grid grid-cols-2 gap-4">
                            {Object.entries(visaDetails).map(([key, otherService]) => (
                                <li key={key} className="flex justify-center">
                                    <Link href={`/services/${key}`}>
                                    <span className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                            <div className="w-[50%] h-[50%] bg-[#162542] rounded-full"/>
                                        </div>
                                        <h3 className="text-md text-[#C0B596]">{otherService.title}</h3>
                                    </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

                {/* For md and lg devices */}
                <aside className="hidden sm:block md:w-1/4 lg:pr-8 lg:border-r lg:border-gray-200 order-first lg:order-none mt-8 lg:mt-0 flex flex-col lg:items-start">
                    <h2 className="text-2xl font-extrabold text-gray-900">Autres services</h2>
                    <ul className="mt-4 grid gap-4 lg:grid-cols-2 md:grid-cols-1">
                        {Object.entries(visaDetails).map(([key, otherService]) => (
                            <li key={key} className="flex justify-between md:flex-col">
                                <Link href={`/services/${key}`}>
                                <span className="flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                        <div className="w-[50%] h-[50%] bg-[#162542] rounded-full"/>
                                    </div>
                                    <h3 className="text-md text-[#C0B596]">{otherService.title}</h3>
                                </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );


};

export default Page;