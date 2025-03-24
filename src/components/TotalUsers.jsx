import Community from '@public/images/icon-communities.svg'
import Messages from '@public/images/icon-messages.svg'

function TotalUsers() { 
    return (
        <>
        <div className="total-users w-full h-[30dvh] flex justify-center items-center mb-50">
            <div className="total-users-container w-full flex justify-around items-center">
                <div className="community">
                    <img src={Community} alt="" className="mb-4" />
                    <h2 className="text-8xl font-poppins font-extrabold">1.4k+</h2>
                    <p className="text-neutral-400 font-semibold text-2xl text-center">Community Formed</p>
                </div>
                <div className="messages">
                    <img src={Messages} alt="" className="mb-4" />
                    <h2 className="text-8xl font-poppins font-extrabold">2.7m+</h2>
                    <p className="text-neutral-400 font-semibold text-2xl text-center">Messages Sent</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default TotalUsers