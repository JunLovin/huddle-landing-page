import Grow from '@public/images/illustration-grow-together.svg'

function GrowTogether() {
    return (
        <>
        <div className="grow-top w-full relative">
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
        </>
    )
}

export default GrowTogether