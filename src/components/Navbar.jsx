
const Navbar = () => {
  return (
    <div className='bg-blue-100 flex justify-between p-5 items-center'>
        <div className='flex items-center gap-2'>
            <div>
                <img className='h-5 rounded-full' src="https://cdn.dribbble.com/userupload/31688600/file/original-e6f1cc798a81c7754e2d2298f31f40ce.png?resize=752x&vertical=center" alt="" />
            </div>
            <h1 className='font-semibold text-blue-600 text-xl'>Todo</h1>
        </div>
        <button className='bg-blue-500 px-3 py-1 rounded text-white '>Task</button>
    </div>
  )
}

export default Navbar
