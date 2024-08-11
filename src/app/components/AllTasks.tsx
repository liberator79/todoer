"use client"
import { ITasks } from "@/types/tasks.type"
import Task from "./Task"

interface AllTasksProps {
    tasks: ITasks[]
}

const AllTasks: React.FC<AllTasksProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto shadow-lg shadow-black rounded-lg max-h-[60vh]">
            <table className="table">
                <thead className="">
                    <tr className="">
                        <th>
                            Completed
                        </th>
                        <th>Title</th>
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((task) => {
                            return (
                                <Task task={task} key = {task.id}/>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllTasks
