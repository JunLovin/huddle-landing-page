import Grow from '@public/images/illustration-grow-together.svg'

function GrowTogether() {
    return (
        <>
        <div className="w-full bg-white mt-90">
            <svg 
                width="120%" 
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
        <div className="grow-top w-full relative bg-[#f5faff]">
            <div className="grow h-[50dvh] w-full relative">
                <div className="grow-container w-full h-full flex justify-around items-center">
                    <div className="grow-left flex flex-col gap-7 h-full justify-center">
                        <h2 className="font-poppins font-extrabold text-5xl">Grow Together</h2>
                        <p className="max-w-[60ch] font-open-sans font-medium">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form</p>
                    </div>
                    <div className="grow-right h-full flex justify-center items-center">
                        <img src={Grow} alt=""  className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full bg-white rotate-180">
            <svg 
                width="120%" 
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