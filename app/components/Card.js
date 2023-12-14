export default function Card({ children, className }) {
    return (
        <div className={`bg-white shadow-lg rounded-xl p-6 ${className} text-left`}>
            {children}
        </div>
    )
}