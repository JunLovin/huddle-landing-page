import Users from '@public/images/illustration-your-users.svg'

function YourUsers() {
    return (
        <>
        <div className="grow-top w-full relative mt-90">
            <div className="grow h-[50dvh] w-full relative">
                <div className="grow-container w-full h-full flex justify-around items-center">
                    <div className="grow-left flex flex-col gap-7 h-full justify-center">
                        <h2 className="font-poppins font-extrabold text-5xl">Your Users</h2>
                        <p className="max-w-[60ch] font-open-sans font-medium">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                    </div>
                    <div className="grow-right h-full flex justify-center items-center">
                        <img src={Users} alt=""  className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default YourUsers