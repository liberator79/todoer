"use client"
import { ITasks } from "@/types/tasks.type"
import { title } from "process"

interface AllTasksProps {
    tasks: ITasks[]
}

const AllTasks: React.FC<AllTasksProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto shadow-lg shadow-black rounded-lg">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            Completed
                        </th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map(({ id, title, description, isCompleted }) => {
                            return (
                                <tr key = {id} onClick={() => {console.log("clicked")}}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className={`checkbox checked:checkbox-success`} />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="font-bold">{title}</div>
                                                
                                                {description && <div className="text-sm opacity-50">{description.length < 10 ? description : (description.substring(0, 10) + "...")}</div>}
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllTasks
