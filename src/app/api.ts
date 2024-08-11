import { ITasks } from "@/types/tasks.type";
import { getFormattedDate } from "./utils/getDate";
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

export const taskDone = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3001/tasks/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({ isCompleted: true })
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (e) {
        throw e;
    }
}

export const deleteTask = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3001/tasks/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
            },
        });
        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (e) {
        throw e;
    }
}



export const editTaskAPI = async (id:string,title : string,description? :string)=> {
    try {
        const res = await fetch(`http://localhost:3001/tasks/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({title, description, updatedAt : getFormattedDate()})
        });

        if (!res.ok) {
            throw new Error(`Error: ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (e) {
        throw e;
    }
}

