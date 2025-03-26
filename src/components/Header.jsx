import Logo from '@public/images/logo.svg'

function Header() {

    const handleHome = () => {
        window.location.href = '/'
    }

    return (
        <>
        <header className="flex justify-between px-20 h-22 items-end mb-12 max-sm:px-3">
            <div className="header-left">
                <img src={Logo} alt="Huddle" className="cursor-pointer max-[400px]:w-[160px] max-[400px]:h-[30px]" onClick={handleHome}/>
            </div>
            <div className="header-right">
                <button className="border-pink-400 rounded-full w-max border-2 px-8 py-2 text-[18px] text-pink-400 cursor-pointer hover:border-pink-300 hover:text-pink-500 transition-all duration-200 font-poppins hover:shadow-xl hover:shadow-pink-300 max-[480px]:px-6 max-[480px]:py-1">Try it Free</button>
            </div>
        </header>
        </>
    )
}

export default Header