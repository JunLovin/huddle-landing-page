import Mockup from '@public/images/screen-mockups.svg'

function Hero() {
    return (
        <>
        <div className="hero w-full h-[150dvh] flex justify-center items-center">
            <div className="hero-container flex flex-col justify-center gap-8">
                <div className="hero-text flex flex-col gap-3">
                    <div className="hero-text-header text-center">
                        <h1 className="font-poppins font-extrabold text-6xl leading-normal max-2xl:text-5xl max-2xl:mt-70 max-sm:text-4xl max-sm:px-4 max-sm:-mt-12 max-[480px]:text-3xl">Build The Community Your Fans Will Love</h1>
                    </div>
                    <div className="hero-text-paragraph text-center">
                        <p className="font-open-sans w-[50ch] leading-normal mx-auto max-[480px]:px-2">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                    </div>
                </div>
                <div className="hero-button mx-auto">
                    <button className="bg-pink-400 text-white w-max px-20 py-5 rounded-full shadow-2xl cursor-pointer font-bold hover:-translate-y-1 transition-all duration-200 active:translate-y-1">Get Started For Free</button>
                </div>
                <div className="Mockup mt-20 mx-auto max-lg:px-8">
                    <img src={Mockup} alt="" className="w-max" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero