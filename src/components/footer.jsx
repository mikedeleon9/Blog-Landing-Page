import mainLogo from "../images/logo.svg"

const headings = ['Product', 'Company', 'Connect'];

const categories = [
    ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
    ['About', 'Team', 'Blog', 'Careers'],
    ['Contact', 'Newsletter', 'LinkedIn']
]

export default function Footer(){
    return (
        <div className="footerBG lg:h-92 flex flex-col md:flex-row items-start py-22  justify-evenly px-16">
            <img src={mainLogo} alt="Main logo" />
           
           {headings.map((heading, i) => (
          
            <div key={heading} className="text-white">
                <p className="mb-8">{heading}</p>
               <ul className="text-white flex flex-col gap-3">
                    {categories[i].map((item) => (
                        <li key={item} className="text-white">{item}</li>
                    ))}
               </ul>
            </div>
           
           ))}
          
        </div>
    )
}