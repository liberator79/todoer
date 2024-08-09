import { ITasks } from "@/types/tasks.type";

const getAllTodos = async () : Promise<ITasks> => {
    const res = await fetch(`${process.env.NEXT_BACKEND_URL}`);
    const tasks = res.json();
    return tasks
}

export default getAllTodos