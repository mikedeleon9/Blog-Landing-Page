import arrowIcon from "../images/icon-arrow-dark.svg"

export default function DropDownMenu(){

    const headerItems = ["Product", "Company", "Connect"];

    return (
        <div className="bg-white py-4  absolute right-15 rounded-md top-25 ">
            <ul className="flex  flex-col gap-2 px-12">
                {headerItems.map(item => (
                    <div className="flex items-center gap-1">
                        <li>{item}</li>
                        <img src={arrowIcon} />
                    </div>
                ))}
            </ul>
          <hr />
        </div>

    )
}