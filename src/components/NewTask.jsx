import {useState} from 'react'

const NewTask = ({setPopUp}) => {
  const [task, setTask] = useState(null);

  return (
    <div className='bg-[FFFEFE] flex flex-col w-[100%] shadow-sm shadow-gray-400 rounded-md font-sans p-2'>
        <input type = "name" placeholder = "Task name" className='font-semibold text-sm p-1 focus-visible:outline-none' onChange={(e) => {
          setTask(e.target.value)
        }}/>
        <input type = "name" placeholder = "Description" className='text-sm p-1 focus-visible:outline-none' />
        <div className='flex justify-end items-center gap-3 px-2'>
          <button className='p-2 text-sm font-semibold hover:bg-gray-200 rounded-md' onClick={() => {
            setPopUp(null);
          }}>Cancel</button>
          <button className={`bg-[rgb(220,77,63)] p-2 text-white rounded-md font-semibold text-sm hover:bg-[rgb(197,70,58)] ${task ? "" : "cursor-not-allowed"} `} disabled={task ? false : true}>Add Task</button>
        </div>
    </div>
  )
}

export default NewTask
