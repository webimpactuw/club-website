import Button from "./Button";

export default function Banner({ className }) {
    return (
        <div className={`bg-secondary text-white py-10 px-20 ${className} w-4/5 rounded-r-full`}>
            <div className="flex justify-between items-center">
                <h1 className="text-white text-4xl font-bold">Need a website? Let’s talk!</h1>
                <Button href="mailto:webimpactuw@gmail.com" className="bg-white">
                    <p className="text-secondary">Email Us</p>
                </Button>
            </div>
        </div>
    )
}