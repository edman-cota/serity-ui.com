import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import { AiFillGithub } from 'react-icons/ai'
import { BsMoonFill } from 'react-icons/bs'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Serity UI - Rapidly build modern websites with easy-to-use React
          components
        </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/logo.svg' />
      </Head>
      <main className='h-screen pt-6 after:bg-white/[0.15] bg-gradient-to-r from-blue-700 via-blue-800 to-blue-600'>
        <nav className='h-16 w-11/12 mx-auto rounded-lg bg-white/[0.15] '>
          <ul className='flex items-center justify-between  h-full px-7'>
            <div className='flex'>
              <li className='text-white text-xl'>
                <Image
                  className='text-white'
                  src={Logo}
                  alt='Serity UI logo'
                  width={26}
                  height={26}
                />
              </li>
            </div>
            <div className='flex gap-7'>
              <Link
                className='text-white hover:text-[rgba(56,189,248,1)]'
                href='/docs/installation/'
              >
                Docs
              </Link>
              <Link
                className='text-white hover:text-[rgba(56,189,248,1)]'
                href='https://github.com/edman-cota/serity-ui.com'
              >
                Components
              </Link>
              <div className='w-[1px] h-6 bg-slate-300'></div>
              <Link
                className='text-white flex items-center'
                href='https://github.com/edman-cota/serity-ui.com'
              >
                <BsMoonFill />
              </Link>
              <Link
                className='text-white flex items-center'
                target='_blank'
                href='https://github.com/edman-cota/serity-ui.com'
              >
                <AiFillGithub />
              </Link>
            </div>
          </ul>
        </nav>
        <div className='flex flex-col w-11/12 h-[calc(100vh_-_90px)] mx-auto lg:flex-row'>
          <div className='flex flex-col w-full py-12 justify-center lg:w-[45%]'>
            <h1 className='text-white text-3xl font-bold text-center md:text-5xl lg:text-left lg:mb-5 '>
              Rapidly build modern websites with easy-to-use React components
            </h1>
            <p className='text-white py-10 text-xl text-center lg:text-left'>
              Easy-to-setup React UI components to speed up your development and
              focus only on the things that matter
            </p>
            <button className='bg-blue-600 text-white px-5 py-2 rounded-md mt-4 w-44 h-10 mx-auto lg:mx-0 '>
              Get Started
            </button>
          </div>
          <div className='w-full lg:w-[55%]'></div>
        </div>
      </main>
    </div>
  )
}
