import { useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import Modal from "./Modal"
import { ITasks } from '@/types/tasks.type';
interface TaskProps {
    task: ITasks
}
const Task: React.FC<TaskProps> = ({ task }) => {
    const [isTaskOpen, setTaskOpen] = useState<boolean>(false);
    return (

        <tr>

            <th>
                <Modal isOpen={isTaskOpen} setIsOpen={setTaskOpen}>
                    <span className='text-gray-500'>Task Details</span>
                    <div className='flex flex-col gap-1 flex-wrap'>

                        <h1 className='font-bold text-lg'>{task.title}</h1>
                        <h3 className='text-md break-words whitespace-normal font-light'>{task.description}</h3>
                    </div>
                </Modal>
                <label>
                    <input type="checkbox" className={`checkbox checked:checkbox-success`}
                        defaultChecked={task.isCompleted}
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
            <td>
                <div className="flex gap-5">
                    <FaRegEdit className="text-lg cursor-pointer " />
                    <MdOutlineDelete className="text-red-600 text-lg cursor-pointer" />
                </div>
            </td>
        </tr>
    )
}

export default Task
