import arrowIcon from "../images/icon-arrow-light.svg"
import mainLogo from "../images/logo.svg"



export default function Header(){
    const headerItems = ["Product", "Company", "Connect"]

    return(
        <div className="  header-div h-3/4">
            <div className="flex items-center justify-between px-42 py-16">

          <header className="flex items-center gap-4 ">
           <img src={mainLogo} alt="main-logo" />
            <ul className="flex items-center gap-4 text-white ">
            {headerItems.map(item => {
                return (
                    <div className="flex items-center gap-2 border-2">
                        <li className="border-2">{item}</li>
                        <img src={arrowIcon} />
                    </div>
                )
            })}
            </ul>
            
          </header>
          <div className="flex items-center text-white">
            <p>Login</p>
            <button>Sign Up</button>
          </div>
          </div>
        </div>
    )
}

