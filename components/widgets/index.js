import { BiSearch } from 'react-icons/bi'

export default function Widgets() {
  return (
    <div className="w-3/12">
      <div className='p-4'>
        <div class="relative mt-1">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-200/30">
            <BiSearch />
          </div>
          <input
            type="text"
            id="email-adress-icon"
            class="block w-full bg-[#202327] p-2.5 pl-10 text-sm text-white rounded-full border-0 ring-0 focus:ring-0 placeholder-gray-200/30"
            placeholder="Search Twitter"
          />
        </div>
      </div>
    </div>
  )
}
