import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "./Modal"
import { ITasks } from '@/types/tasks.type';
import { taskDone } from '../api';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { deleteTask } from '../api';
interface TaskProps {
    task: ITasks
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const router = useRouter();
    const [isTaskOpen, setTaskOpen] = useState<boolean>(false);
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
                        <div className="flex  gap-3 justify-end">
                            <FaRegEdit className="text-lg cursor-pointer " />
                            <MdOutlineDelete className="text-red-600 text-lg cursor-pointer" onClick={handleDelete} />
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
            <td className='cursor-pointer' onClick={() => { setTaskOpen(true) }}>
                More Info
            </td>
        </tr>
    )
}

export default Task
