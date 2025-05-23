import editorLogo from "../images/illustration-editor-desktop.svg";
import editorLogoMobile from "../images/illustration-editor-mobile.svg"

export default function DesignComponent(){
    return (
        <div className="  relative flex flex-col mb-78  ">
             <h2 className="text-center text-darkBlue font-semibold absolute top-2 xl:top-24 w-full text-4xl z-10 ">Designed for the future</h2>

            <div className="design-div relative flex-col-reverse xl:flex-row items-center xl:items-start flex gap-4 ">
               
                <div className="px-8 xl:px-32 flex-1 flex flex-col mt-8 xl:mt-58 gap-16 text-base/8">
                   <div>
                        <p className="text-2xl mb-8 text-darkBlue font-semibold text-center xl:text-start">Introducing an extensible editor</p>
                        <p className="text-graish font-extralight text-center xl:text-start">Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                    </div>
                    <div>
                        <p className="text-2xl mb-8 text-darkBlue font-semibold text-center xl:text-start">Robust content management</p>
                        <p className="text-graish font-extralight text-center xl:text-start">Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
                    </div>
                </div>

               <div className=" flex-1">
                    <img className=" editorImage opacity-0 xl:opacity-100 absolute" src={editorLogo} alt="desktop image" />
                    <img className="opacity-100 xl:opacity-0 mt-18" src={editorLogoMobile} alt="mobile image" />
               </div>
            </div>
        </div>
    )
}