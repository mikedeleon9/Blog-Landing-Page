import arrowIcon from "../images/icon-arrow-dark.svg";
import {useState} from "react"

export default function DropDownMenu({showHamburgerMenu}){
    const [isDropDown, setIsDropDown] = useState(false);
    

    const headerItems = ["Product", "Company", "Connect"];
    const dropDownItems = [
        ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
        ["About", "Team", "Blog", "Careers"],
        ["Contact", "Newsletter", "LinkedIn"]
    ];

    function handleDropDown(index){
        setIsDropDown(prev => prev === index ? null : index)
    }



    return (
        <div className={`${showHamburgerMenu ? "block" : "hidden" }  bg-white py-4  absolute right-15 rounded-md top-25 shadow-lg`}>
            <ul className="flex w-48 flex-col gap-2 px-4 mb-4">
                {headerItems.map((item, index) => (
                    <div className="flex flex-col items-center gap-1">
                        <div onClick={()=>handleDropDown(index)} className="flex items-center gap-2 cursor-pointer">
                            <li>{item}</li>
                            <img className={`transition-transform duration-300  ${isDropDown === index ? 'rotate-180' : 'rotate-0'}`}  src={arrowIcon} />
                        </div>
                       <div className={`${isDropDown === index ? "block" : "hidden"} flex flex-col gap-2 rounded-lg bg-slate-300 px-10 py-2`}>
                        {dropDownItems[index].map((dropdownItem, i) => (
                               
                               <p className="cursor-pointer  hover:font-semibold" key={i}>{dropdownItem}</p>
                       ))}
                       </div>
                       </div>
                   
                ))}
            </ul>
          <hr className="py-2" />
                
                
                
          <div className="flex flex-col items-center gap-2">
          <p className="cursor-pointer" >Login</p>
          <button className="signUpButton cursor-pointer px-6 py-2 text-white rounded-full">Sign Up</button>
          </div>
        </div>

    )
}