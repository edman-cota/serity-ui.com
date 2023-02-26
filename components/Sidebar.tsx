import Link from 'next/link'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Logo from '../public/logo.svg'

const Sidebar = () => {
  const router = useRouter()

  const Menus = [
    {
      title: 'Getting Started',
      submenu: true,
      submenuItems: [{ title: 'Installation', href: '/docs/installation' }],
    },
    // {
    //   title: 'Core Concepts',
    //   submenu: true,
    //   submenuItems: [
    //     { title: 'Style Props', href: '/docs/utility-first' },
    //     { title: 'Color Mode', href: '/docs/utility-first' },
    //     {
    //       title: 'Responsive Design',
    //       href: '/docs/responsive-design',
    //     },
    //   ],
    // },
    {
      title: 'Components',
      spacing: true,
      submenu: true,
      submenuItems: [
        // { title: 'Avatar', href: '/docs/components/avatar' },
        // { title: 'Image', href: '/docs/components/image' },
        { title: 'Select', href: '/docs/components/select' },
        // { title: 'Slider', href: '/docs/components/slider' },
        // { title: 'Switch', href: '/docs/components/switch' },
        { title: 'Tooltip', href: '/docs/components/tooltip' },
      ],
    },
  ]
  return (
    <aside className='hidden lg:block fixed z-20 mt-4 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-auto scrollbar scrollbar-thumb-[#c7c5d3] dark:scrollbar-thumb-slate-800 scrollbar-track-white dark:scrollbar-track-slate-900 scrollbar-thumb-rounded-md scrollbar-w-[10px]'>
      <div className='flex justify-center mb-6'></div>
      <div className='flex items-center rounded-md bg-slate-200 dark:bg-slate-800 mt-6 px-4 py-2'>
        <BsSearch className='text-slate-400 dark:text-white text-base block float-left cursor-pointer mr-3 ' />
        <input
          type={'search'}
          placeholder='Quick Search'
          className='text-sm bg-transparent w-full text-slate-500 dark:text-white focus:outline-none'
        />
      </div>
      <ul className='pt-2'>
        {Menus.map((menu, index) => (
          <li key={index} className='mt-12 lg:mt-8'>
            <h5 className='mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200'>
              {menu.title}
            </h5>
            {menu.submenu && (
              <ul className='space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800'>
                {menu.submenuItems.map((submenuItem, index) => (
                  <li key={index}>
                    <Link
                      href={submenuItem.href}
                      className={`block border-l pl-4 -ml-px border-transparent ${
                        router.asPath === submenuItem.href
                          ? 'text-sky-400 border-sky-400 hover:border-sky-400'
                          : 'text-slate-700 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-500'
                      } `}
                    >
                      {submenuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Sidebar
