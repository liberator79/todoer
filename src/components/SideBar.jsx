import { CiSearch } from "react-icons/ci";
import { IoCalendarNumberOutline } from "react-icons/io5";
import NewTask from "./NewTask";

import { IoIosAddCircle } from "react-icons/io";
const SideBar = ({setPopUp}) => {
    const sideBarItems = [
        {
            logo: <IoIosAddCircle className="text-2xl text-[rgb(220,77,63)]" />,
            name: <div className="font-bold text-[rgb(220,77,63)] text-lg">Add</div>,
            popUp : <NewTask />
        },
        {
            logo: <CiSearch className="text-xl" />,
            name: "Search",
            popUp : null
        },
        {
            logo : <IoCalendarNumberOutline/>,
            name : "Today",
            popUp : null
        }

    ]
    return (
        <div>
            <div className="font-bold text-2xl px-1 flex py-2 justify-center">Todoer</div>
            <div className="bg-[FDFBF8] h-[100vh] flex flex-col w-[100%] justify-start items-start px-4 py-10  gap-1">

                {
                    sideBarItems.map(({ logo, name, popUp }, index) => {
                        return (
                            <div className="flex gap-2 items-center justify-start py-1 hover:bg-gray-200 w-[100%] rounded-md px-2 font-light cursor-pointer" onClick={() => {
                                if(popUp)
                                {
                                    setPopUp(popUp)
                                }
                            }} key={index}>
                                {logo}
                                {name}
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default SideBar
