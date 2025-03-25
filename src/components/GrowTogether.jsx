import Grow from '@public/images/illustration-grow-together.svg'

function GrowTogether() {
    return (
        <>
        <div className="w-full bg-white mt-20">
            <svg 
                width="100%" 
                height="155" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                preserveAspectRatio="none"
                viewBox="0 0 1440 165"
                className="fill-[#f5faff]"
            >
                <defs><path id="a" d="M0 0h1440v165H0z"/></defs>
                <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#fff"><use xlinkHref="#a"/></mask>
                    <g mask="url(#b)" fill="#f5faff">
                        <path d="M0 127.6C152.937 41.92 298.933 25.782 437.988 79.187c208.583 80.107 457.536 53.405 594.167 0C1168.785 25.782 1172.696-39.335 1440 30.224c267.304 69.56 0 698.192 0 698.192s-211.887 128.179-591.858 64.09C594.828 749.779 312.114 765.996 0 841.156V127.6z"/>
                    </g>
                </g>
            </svg>
        </div>
            <div className="grow bg-[#f5faff] w-full relative py-16">
                <div className="grow-container w-full h-full flex flex-row-reverse justify-around items-center max-xl:flex-col max-xl:text-center max-xl:gap-10 px-6">
                    <div className="grow-right max-xl:mb-8 max-w-md mx-auto">
                        <img src={Grow} alt="" className="w-full h-auto"/>
                    </div>
                    <div className="grow-left flex flex-col gap-5 max-w-md mx-auto">
                        <h2 className="font-poppins font-extrabold text-5xl max-xl:text-center max-[480px]:text-4xl">Grow Together</h2>
                        <p className="font-open-sans max-xl:text-center">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white rotate-180">
            <svg 
                width="100%" 
                height="155" 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                preserveAspectRatio="none"
                viewBox="0 0 1440 165"
                className="fill-[#f5faff]"
            >
                <defs><path id="a" d="M0 0h1440v165H0z"/></defs>
                <g fill="none" fillRule="evenodd">
                    <mask id="b" fill="#fff"><use xlinkHref="#a"/></mask>
                    <g mask="url(#b)" fill="#f5faff">
                        <path d="M0 127.6C152.937 41.92 298.933 25.782 437.988 79.187c208.583 80.107 457.536 53.405 594.167 0C1168.785 25.782 1172.696-39.335 1440 30.224c267.304 69.56 0 698.192 0 698.192s-211.887 128.179-591.858 64.09C594.828 749.779 312.114 765.996 0 841.156V127.6z"/>
                    </g>
                </g>
            </svg>
        </div>
        </>
    )
}

export default GrowTogether