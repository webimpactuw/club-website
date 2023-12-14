import Image from "next/image";

export default function Footer() {
    const links = [
        {
            image: "./discord.svg",
            alt: "Discord",
            href: "https://discord.gg/GqfcCyvWxU"
        },
        {
            image: "./instagram.svg",
            alt: "Instagram",
            href: "https://www.instagram.com/webimpactuw/"
        },
        {
            image: "./github.svg",
            alt: "GitHub",
            href: "https://www.github.com/webimpactuw/"
        },
        {
            image: "./linkedin.svg",
            alt: "LinkedIn",
            href: "https://www.linkedin.com/company/webimpact-uw/"
        },
    ]
    return (
        <footer className="bg-dark-purple px-20 py-6">
            <div className="flex justify-between items-center">
                <div className="flex flex-col items-left justify-center">
                    <Image
                        src="./logo_main.svg"
                        alt="Web Impact Logo"
                        width={175}
                        height={60}
                    />
                    <p className="text-primary">© Web Impact UW {new Date().getFullYear()}-{new Date().getFullYear() + 1}</p>
                </div>

                <div className="flex justify-center">
                    {links.map(link => (
                        <a href={link.href} target="_blank" className="mx-4" key={link.href}>
                            <Image
                                src={link.image}
                                alt={link.alt}
                                width={30}
                                height={30}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}