import Image from 'next/image';

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-900 py-16 flex flex-col items-center justify-center"
        >
            {/* Section Title */}
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">Skills</h2>

                <p className="inline-block px-4 py-2 bg-purple-900/50 text-white rounded-full shadow-lg font-bold">
                    Towards a new era of software development
                </p>
            </div>

            {/* Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6 px-4">
                <Image src="/html.svg" alt="HTML" width={80} height={80} />
                <Image src="/css.svg" alt="CSS" width={80} height={80} />
                <Image src="/sass.svg" alt="SASS" width={80} height={80} />
                <Image src="/javascript.svg" alt="JavaScript" width={80} height={80} />
                <Image src="/react.svg" alt="React" width={80} height={80} />
                <Image src="/tailwind.svg" alt="TailwindCSS" width={80} height={80} />
            </div>
        </section>
    );
};

export default Skills;
