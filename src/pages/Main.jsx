import { useState } from "react";
import NewTask from "../components/NewTask";
import SideBar from "../components/SideBar";

const Main = () => {
    const [popUp, setPopUp] = useState("");
    const [data, setData] = useState("");

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 border-r">
                <SideBar setPopUp={setPopUp} />
            </div>
            <div className="col-span-10 p-10 flex justify-center items-start relative">
                {
                    data ?
                        data.map(() => {
                            return ""
                        }) : <div className="h-[100vh] w-[100%] items-center justify-center flex text-gray-500">No tasks to show</div>
                }
                {
                    popUp &&
                    <div className="absolute inset-0  flex justify-center  items-center z-50">
                        <div className="bg-white w-[80%] rounded shadow-lg shadow-black">
                            {popUp}
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default Main;
