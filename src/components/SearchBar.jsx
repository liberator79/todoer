import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
    return (
        <div className='bg-[FFFEFE] flex flex-col w-[100%] shadow-sm shadow-gray-400 rounded-md font-sans p-2'>
            <div className='flex justify-start items-center gap-2 w-[100%]'>
                <div className='text-xl'>
                    <CiSearch/>
                </div>
                <div className='w-[100%]'>
                    <input type="name" placeholder="Search" className='text-sm p-1 focus-visible:outline-none w-[100%]' />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
