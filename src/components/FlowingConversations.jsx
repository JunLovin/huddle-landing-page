import FlowingC from '@public/images/illustration-flowing-conversation.svg'

function FlowingConversations() {
    return (
        <>
        <div className="grow-top w-full relative mt-20 max-sm:mb-48">
            <div className="grow h-[50dvh] w-full relative">
                <div className="grow-container w-full h-full flex flex-row-reverse justify-around items-center max-xl:flex-col-reverse max-xl:gap-20 max-xl:text-center">
                    <div className="grow-left flex flex-col gap-7 h-full justify-center">
                        <h2 className="font-poppins font-extrabold text-5xl max-[480px]:text-4xl max-[480px]:leading-normal">Flowing Conversations</h2>
                        <p className="max-w-[60ch] font-open-sans font-medium">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                    </div>
                    <div className="grow-right h-full flex justify-center items-center">
                        <img src={FlowingC} alt=""  className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FlowingConversations