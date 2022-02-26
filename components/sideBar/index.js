import { FaTwitter } from 'react-icons/fa'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import SideBarOptions from '../sideBar/sidebarOption'
import {
  RiHome7Fill,
  RiHome7Line,
  RiHashtag,
  RiBookmarkFill,
  RiBookmarkLine,
  RiFileList2Line,
  RiFileList2Fill,
  RiUser6Line,
  RiUser6Fill,
} from 'react-icons/ri'
import { IoIosNotificationsOutline, IoIosNotifications } from 'react-icons/io'
import { HiOutlineMail, HiOutlineDotsCircleHorizontal } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'

export default function SideBar({ initialSelectedIcon = 'Home' }) {
  const [selected, setSelected] = useState(initialSelectedIcon)
  return (
    <div className="flex w-3/12 flex-col items-center justify-between py-3">
      <div className="flex flex-col items-start text-white">
        <a href="/">
          <div className="flex cursor-pointer rounded-full p-3 text-3xl text-white hover:bg-blue-500/10">
            <FaTwitter />
          </div>
        </a>
        <SideBarOptions
          title="Home"
          Icon={selected !== 'Home' ? RiHome7Line : RiHome7Fill}
          setSelected={() => setSelected('Home')}
          isActive={Boolean(selected === 'Home')}
        />
        <SideBarOptions
          title="Explore"
          Icon={selected !== 'Explore' ? RiHashtag : RiHashtag}
          setSelected={() => setSelected('Explore')}
          isActive={Boolean(selected === 'Explore')}
        />
        <SideBarOptions
          title="Notification"
          Icon={
            selected !== 'Notification'
              ? IoIosNotificationsOutline
              : IoIosNotifications
          }
          setSelected={() => setSelected('Notification')}
          isActive={Boolean(selected === 'Notification')}
        />
        <SideBarOptions
          title="Message"
          Icon={selected !== 'Message' ? HiOutlineMail : MdEmail}
          setSelected={() => setSelected('Message')}
          isActive={Boolean(selected === 'Message')}
        />
        <SideBarOptions
          title="Bookmarks"
          Icon={selected !== 'Bookmarks' ? RiBookmarkLine : RiBookmarkFill}
          setSelected={() => setSelected('Bookmarks')}
          isActive={Boolean(selected === 'Bookmarks')}
        />
        <SideBarOptions
          title="Lists"
          Icon={selected !== 'Lists' ? RiFileList2Line : RiFileList2Fill}
          setSelected={() => setSelected('Lists')}
          isActive={Boolean(selected === 'Lists')}
        />
        <SideBarOptions
          title="Profile"
          Icon={selected !== 'Profile' ? RiUser6Line : RiUser6Fill}
          setSelected={() => setSelected('Profile')}
          isActive={Boolean(selected === 'Profile')}
        />
        <SideBarOptions
          title="More"
          Icon={
            selected !== 'More'
              ? HiOutlineDotsCircleHorizontal
              : HiOutlineDotsCircleHorizontal
          }
          setSelected={() => setSelected('More')}
          isActive={Boolean(selected === 'More')}
        />
        <div className="my-4 flex cursor-pointer rounded-full bg-[#1d9bf0] py-2 px-20 font-semibold hover:bg-[#0e87d8]">
          Tweet
        </div>
      </div>

      <div className="mb-4 flex cursor-pointer flex-row items-center justify-around rounded-full p-2 hover:bg-gray-100/10">
        <div className="flex flex-row items-center">
          <img
            src="https://pbs.twimg.com/profile_images/1488408201305661442/toRKuxso_200x200.jpg"
            className="h-9 w-9 rounded-full object-cover"
          />
          <div className="ml-2">
            <h4 className="text-sm">Hafis Muhammed</h4>
            <h5 className="text-xs text-gray-100/50">@HafisMu11</h5>
          </div>
        </div>
        <div className="ml-4">
          <HiOutlineDotsHorizontal />
        </div>
      </div>
    </div>
  )
}
