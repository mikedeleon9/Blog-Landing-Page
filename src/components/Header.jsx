import arrowIcon from "../images/icon-arrow-light.svg"
import mainLogo from "../images/logo.svg"



export default function Header(){
    const headerItems = ["Product", "Company", "Connect"]

    return(
        <div className=" header-div pb-32 mb-16 flex flex-col  gap-12">
            <div className="flex items-center justify-between px-42 py-12">

          <header className="flex items-center gap-12">
           <img className="" src={mainLogo} alt="main-logo" />
            <ul className="flex items-center gap-4 text-white ">
            {headerItems.map(item => {
                return (
                    <div className="flex items-center gap-2 ">
                        <li className="">{item}</li>
                        <img src={arrowIcon} />
                    </div>
                )
            })}
            </ul>
            
          </header>
          <div className="flex items-center text-white gap-8">
            <p className="cursor-pointer">Login</p>
            <button className="px-6 py-2 rounded-full bg-white text-customRed font-bold cursor-pointer hover:text-white hover:bg-hoverRed">Sign Up</button>
          </div>
          </div>
          <div className="flex flex-col text-center text-customWhite gap-8">
            <h1 className="text-6xl">A modern publishing platform</h1>
            <p className="text-lg">Grow your audience and build your online brand</p>
                <div className="text-center flex items-center justify-center gap-4">
                    <button className="px-4 py-2 rounded-full bg-white cursor-pointer shadow-md text-customRed font-bold hover:text-white hover:bg-hoverRed">Start for free</button>
                    <button className="px-4 py-2 rounded-full border cursor-pointer shadow-md hover:text-customRed hover:bg-white hover:border-white">Learn more</button>
                </div>
          </div>
        </div>
    )
}

