import arrowIcon from "../images/icon-arrow-light.svg"
import mainLogo from "../images/logo.svg"
import hamburgerMenu from "../images/icon-hamburger.svg"
import {useState, useEffect, useRef} from "react"

export default function Header(){
    const [openIndex, setOpenIndex] = useState(false);
    const dropdownRef = useRef(null);

    const headerItems = ["Product", "Company", "Connect"];
    const dropDownItems = [
        ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
        ["About", "Team", "Blog", "Careers"],
        ["Contact", "Newsletter", "LinkedIn"]
    ];

    function toggleDropDown(index){
        setOpenIndex(prev => prev === index ? null : index)
    }
 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenIndex(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className=" header-div pb-32 mb-16 flex flex-col  gap-12 ">
            <div className="flex items-center justify-between px-12 md:px-42 py-12">

          <header className="flex items-center gap-12" ref={dropdownRef}>
           <img className="" src={mainLogo} alt="main-logo" />
            <ul className="flex items-center gap-22 text-white ">
            {headerItems.map((item, index) => {
                return (
                    <div onClick={() => toggleDropDown(index)} key={item} className="hidden lg:flex items-center gap-2 relative">
                        <li  className="cursor-pointer hover:underline hover:decoration-2 ">{item}</li>
                        <img src={arrowIcon} />
                        <div className={`${openIndex === index  ? 'block' : 'hidden'}  bg-white text-black absolute top-8 px-4 w-32 py-4 rounded-md font-light flex flex-col items-start gap-1`}>
                            {dropDownItems[index].map((dropdownItem, i) => (
                               
                                    <p key={i}>{dropdownItem}</p>
                                
                            ))}
                        </div>
                    </div>
                )
            })}
            </ul>
            
          </header>
          <img className="opacity-100 xl:opacity-0" src={hamburgerMenu} alt="" />
          <div className="hidden xl:flex items-center text-white gap-8">
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

