 import mobileLogo from "../images/illustration-phones.svg"


export default function ArtComponent(){
    return(
        <div className="artComponent h-[550px] xl:h-86 relative flex flex-col  justify-center items-center xl:items-end mb-24">

               
                <img className="main-image  absolute top-[-250px] xl:top-[-150px]  xl:left-[50px]" src={mobileLogo} alt="phonesLogo" />
               
                <div className="flex flex-col gap-6 w-auto xl:w-1/2 mt-32 xl:mt-0 justify-center mr-0 xl:mr-24 text-white p-12 xl:p-16">
                    <h2 className="text-[2rem] font-medium text-center xl:text-start">State of the Art Infrastructure</h2>
                    <p className="text-center xl:text-start">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
        </div>
    )
}