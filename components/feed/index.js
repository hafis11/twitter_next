import { BsStars } from 'react-icons/bs'

export default function Feed() {
  return (
    <div className="w-6/12 border-x border-gray-200/30 p-4">
      <div className='w-full flex justify-between items-center text-xl font-semibold'>
        <h4>Home</h4>
        <BsStars />
      </div>
    </div>
  )
}
