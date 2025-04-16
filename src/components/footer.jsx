import mainLogo from "../images/logo.svg"

const headings = ['Product', 'Company', 'Connect'];

const categories = [
    ['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations'],
    ['About', 'Team', 'Blog', 'Careers'],
    ['sContact', 'Newsletter', 'LinkedIn']
]

export default function Footer(){
    return (
        <div className="footerBG h-96 flex items-center justify-between">
            <img src={mainLogo} alt="Main logo" />
           {headings.map((heading, i) => (
          
            <div key={heading} className="text-white">
                <p>{heading}</p>
               <ul className="text-white">
                    {categories[i].map((item) => (
                        <li className="text-white">{item}</li>
                    ))}
               </ul>
            </div>
           
           ))}
        </div>
    )
}