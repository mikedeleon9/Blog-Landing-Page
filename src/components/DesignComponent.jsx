import editorLogo from "../images/illustration-editor-desktop.svg";

export default function DesignComponent(){
    return (
        <div className="overflow-clip h-full relative top-20">
            <h2 className="left-1/2 border-2  -translate-x-1/2 w-11/12 absolute text-4xl">A place for design</h2>
            <div className="design-div flex items-center h-full relative">
                
                <div className="w-1/2">
                    <p>Introducing an extensible editor</p>
                    <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
                </div>
                
                <div className="border-2 border-blue-500">
            <img className=" editorImage" src={editorLogo} alt="" />
            </div>
                
                
            </div>
        </div>
    )
}