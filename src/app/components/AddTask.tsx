"use client"
import { IoAddSharp } from "react-icons/io5";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { addTask } from "../api";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { ITasks } from "@/types/tasks.type";
const AddTask = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [task, setTask] = useState<string>();
    const description = useRef<HTMLInputElement>(null);
    const handleSubmitTask = async () => {
        const addedTask = await addTask({
            id : uuidv4(),
            title: task,
            description : description.current?.value,
            isCompleted : false
        });
        setTask("");
        if (description.current) {
            description.current.value = "";
        }
        router.refresh();
    }
    return (
        <div>
            <button className="btn w-full btn-primary" onClick={() => setIsOpen(true)}>
                <div className="font-bold ">Add Task</div>
                <IoAddSharp className="text-xl" />
            </button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex flex-col w-full gap-3 cu">
                    <h3>Add New Task</h3>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow font-bold" placeholder="Title" onChange={(e) => { setTask(e.target.value) }} value={task}/>
                        <span className="badge badge-primary text-[10px] font-light">Required</span>
                    </label>
                    <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow" placeholder="Description" ref={description} />
                        <span className="badge badge-primary text-[10px] font-light">Optional</span>
                    </label>
                    <button onClick={handleSubmitTask} className="btn w-full btn-primary disabled:border-[rgb(116,128,255)] disabled:text-gray-600" disabled={task ? false : true}>
                        Submit
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default AddTask

