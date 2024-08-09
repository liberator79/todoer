import getAllTodos from "@/api/getTodos";
import AddTask from "./components/AddTask";
import AllTasks from "./components/AllTasks";
export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks)
  return (
    <main className=" max-w-4xl mx-auto ">
      <div className="my-5 text-center flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Todo</h1>
        <AddTask />
        <div className=" rounded-lg shadow-lg shadow-black"><AllTasks tasks = {tasks}/>  </div>
      </div>
    </main>
  );
}
