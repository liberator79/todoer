import { ITasks } from "@/types/tasks.type";

const getAllTodos = async () : Promise<ITasks[]> => {
    const res = await fetch(`http://localhost:3001/tasks`);
    const tasks = res.json();
    return tasks
}

export default getAllTodos