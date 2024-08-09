"use client"
import { IoAddSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import Modal from "./Modal";
const AddTask = () => {
    const handleSubmitTask = () => 
    {
    }
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [task, setTask] = useState<string>();
    const description = useRef<HTMLInputElement>(null);
    return (
        <div>
            <button className="btn w-full btn-primary" onClick={() => setIsOpen(true)}>
                <div className="font-bold ">Add Task</div>
                <IoAddSharp className="text-xl" />
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col w-full gap-3">
                    <h3>Add New Task</h3>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow font-bold    " placeholder="Title" onChange={(e) => {setTask(e.target.value)}}/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow" placeholder="Description" ref={description} />
                        <span className="badge badge-info">Optional</span>
                    </label>
                    <button onClick={handleSubmitTask} className="btn w-full btn-primary" disabled= {task?false:true}>
                        Submit
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default AddTask

