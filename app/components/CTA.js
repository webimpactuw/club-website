export default function CTA({ children, href, className }) {
    return (
        <a
            href={href}
            className={`no-underline text-primary font-semibold ${className}`}
        >
            {children} &rarr;
        </a>
    )
}