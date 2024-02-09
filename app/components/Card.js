export default function Card({ children, className }) {
    return (
        <div className={`bg-white shadow-lg rounded-xl px-6 py-12 md:py-6 mx-12 md:mx-0 ${className} text-center md:text-left`}>
            {children}
        </div>
    )
}