 import mobileLogo from "../images/illustration-phones.svg"


export default function ArtComponent(){
    return(
        <div className="artComponent h-78 relative flex  justify-end">
      
                <img className="main-image " src={mobileLogo} alt="phonesLogo" />

                <div className="flex flex-col  w-1/2 justify-center mr-24 text-white">
                    <h2>State of the Art Infrastructure</h2>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </div>
        </div>
    )
}