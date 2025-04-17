import laptopImage from "../images/illustration-laptop-desktop.svg"
import laptopMobileImage from "../images/illustration-laptop-mobile.svg"

export default function LaptopComponent(){
    return(
        <div className="block lg:flex flex-col lg:flex-row  mb-52">
            <div className="flex-1 flex justify-center">
                <img className="laptop-image hidden lg:block lg:absolute  lg:left-[-280px]" src={laptopImage} alt="laptop image" />
                <img className="lg:hidden" src={laptopMobileImage} alt="mobile image of phone" />
            </div>
            <div className="flex-1 lg:mt-32 px-8 lg:px-22  lg:py-18 flex flex-col gap-10 text-center lg:text-start lg:gap-22 text-base/8">
                <div className="">
                    <h2 className="text-2xl mb-8 font-medium">Free, open, simple</h2>
                    <p className="text-graish font-extralight">Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
                </div>
                <div>
                    <h2 className="text-2xl mb-8 font-medium">Powerful tooling</h2>
                    <p className="text-graish font-extralight">Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
        </div>
    )
}