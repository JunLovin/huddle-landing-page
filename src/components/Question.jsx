function Question() {
    
    const handleGithub = () => {
        window.open("https://github.com/JunLovin", "_blank")
    }

    return (
        <>
        <div className="question h-[50dvh] mt-30 text-center">
            <div className="question-container h-full w-full flex flex-col justify-center items-center gap-10">
                <h2 className="font-poppins font-extrabold text-5xl max-sm:text-4xl">Ready To Build Your Community?</h2>
                <button className="bg-pink-400 text-white w-max px-20 py-5 rounded-full shadow-2xl cursor-pointer font-bold hover:-translate-y-1 transition-all duration-200 active:translate-y-1 font-open-sans" onClick={handleGithub}>Get Started For Free</button>
            </div>
        </div>
        </>
    )
}

export default Question