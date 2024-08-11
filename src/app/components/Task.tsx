import { useState, useRef } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "./Modal"
import { ITasks } from '@/types/tasks.type';
import { editTaskAPI, taskDone } from '../api';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { deleteTask } from '../api';
interface TaskProps {
    task: ITasks
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [isTaskOpen, setTaskOpen] = useState<boolean>(false);
    const [isEditOpen, setEditOpen] = useState<boolean>(false);
    const [editTask, setEditTask] = useState<string>(task.title);
    const [editedDescription, setEditedDescription] = useState<string>(task.description || "");
    const handleCompleted = async () => {
        toast.promise(
            taskDone(task.id),
            {
                loading: 'Updating...',
                success: <b>Updated</b>,
                error: <b>Something went wrong</b>,
            }
        );
        router.refresh();
    }
    const handleDelete = () => {
        toast.promise(
            deleteTask(task.id),
            {
                loading: 'Deleting...',
                success: <b>Deleted</b>,
                error: <b>Something went wrong</b>,
            }
        );
        router.refresh();
    }
    const handleEditTask = async () => {
        toast.promise(
            editTaskAPI(task.id, editTask, editedDescription),
            {
                loading: 'Updating...',
                success: <b>Updated</b>,
                error: <b>Something went wrong</b>,
            }
        );
        setEditOpen(false)
        router.refresh();
    }
    return (

        <tr>

            <th>
                <Modal isOpen={isTaskOpen} setIsOpen={setTaskOpen}>

                    <div className='flex flex-col gap-5 flex-wrap'>
                        <span className='text-gray-500'>Task Details</span>
                        <div className='gap-0'>
                            <h1 className='font-bold text-lg'>{task.title}</h1>
                            <h3 className='text-md break-words whitespace-normal font-light'>{task.description}</h3>

                        </div>
                        <div className='flex justify-start font-light text-[0.8rem]'>
                            Updated on : {task.updatedAt}
                        </div>
                    </div>
                </Modal>
                <label>
                    <input type="checkbox" className={`checkbox checked:checkbox-success disabled:checkbox-success disabled:opacity-100`}
                        defaultChecked={task.isCompleted}
                        disabled={task.isCompleted}
                        onClick={handleCompleted}
                    />
                </label>
            </th>
            <td className="cursor-pointer" onClick={() => { setTaskOpen(true) }}>
                <div className="flex items-center gap-3">

                    <div>
                        <div className="font-bold">{task.title}</div>

                        {task.description && <div className="text-[0.8rem] opacity-50">{task.description.length < 10 ? task.description : (task.description.substring(0, 10) + "...")}</div>}
                    </div>

                </div>

            </td>
            <td >
                <div className="flex  gap-3 ">

                    <FaRegEdit className="text-lg cursor-pointer " onClick={() => { setEditOpen(true) }} />
                    <MdOutlineDelete className="text-red-600 text-lg cursor-pointer" onClick={handleDelete} />
                    <Modal isOpen={isEditOpen} setIsOpen={setEditOpen}>

                        <div className="flex flex-col w-full gap-3 cu">
                            <h3>Edit Task</h3>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <input type="text" className="grow font-bold" placeholder="Title" onChange={(e) => { setEditTask(e.target.value) }} value={editTask} />
                                <span className="badge badge-primary text-[10px] font-light">Required</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2 w-full">
                                <input
                                    type="text"
                                    className="grow"
                                    placeholder="Description"
                                    value={editedDescription}
                                    onChange={(e) => setEditedDescription(e.target.value)}
                                />
                                <span className="badge badge-primary text-[10px] font-light">Optional</span>
                            </label>
                            <button className="btn w-full btn-primary disabled:border-[rgb(116,128,255)] disabled:text-gray-600" disabled={editTask ? false : true} onClick={handleEditTask}>
                                Submit
                            </button>
                        </div>
                    </Modal>
                </div>
            </td>
        </tr>
    )
}

export default Task
