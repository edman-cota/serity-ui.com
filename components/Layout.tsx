import Link from 'next/link'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }: any) => {
  return (
    <div className='bg-white dark:bg-slate-900 '>
      <Navbar />
      <div className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8'>
        <Sidebar />
        <div className='lg:pl-[19.5rem] '>
          <main className='w-full mx-auto relative z-20 flex  overflow-hidden py-10  text-white'>
            {children}
          </main>
          <footer className='text-sm leading-6 mt-16'>
            <div className='pt-10 pb-28 border-t sm:flex justify-between text-slate-500 border-slate-200/5'>
              <div className='mb-6 sm:mb-0 sm:flex'>
                <p>Copyright © 2022 Serity Inc.</p>
                <p className='sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200/5'>
                  <Link className='hover:text-slate-400' href='/brand'>
                    Trademark Policy
                  </Link>
                </p>
              </div>
              <div></div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Layout
