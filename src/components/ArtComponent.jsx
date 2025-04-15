 import mobileLogo from "../images/illustration-phones.svg"


export default function ArtComponent(){
    return(
        <div className="artComponent h-86 relative flex flex-col justify-center items-end mb-24">

               
                <img className="main-image " src={mobileLogo} alt="phonesLogo" />
               
                <div className="flex flex-col gap-6 w-1/2 justify-center mr-24 text-white p-16">
                    <h2 className="text-3xl">State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
        </div>
    )
}