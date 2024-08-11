import { ITasks } from "@/types/tasks.type";

export const getAllTodos = async () : Promise<ITasks[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, {cache: 'no-store'});
    const tasks = res.json();
    return tasks
}

export const addTask = async (task : ITasks) : Promise<ITasks> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        method : "POST",
        headers : {
            'Content-type' : "application/json",
        },
        body : JSON.stringify(task)
    });
    return await res.json();
}