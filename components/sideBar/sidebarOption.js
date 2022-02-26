export default function SideBarOptions({ title, Icon, setSelected, isActive }) {
  return (
    <button
      onClick={setSelected}
      className="flex cursor-pointer flex-row items-center justify-start rounded-full p-3 px-4 text-xl transition-all hover:bg-gray-100/5 hover:duration-200 hover:ease-in-out pr-6"
    >
      <div>
        <Icon />
      </div>
      <h4 className={`ml-3 font-sans ${isActive ? 'font-semibold' : 'font-normal'}`}>
        {title}
      </h4>
    </button>
  )
}
