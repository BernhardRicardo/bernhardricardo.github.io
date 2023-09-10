export default function Header() {
   return (
    <nav className='flex items-center justify-between flex-wrap bg-white py-6 px-11'>
          <div className='flex items-center flex-shrink-0 text-black mr-6'>
            <span className='font-semibold text-xl tracking-tight'>Bernhard</span>
          </div>
          <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black'>
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                <title>Menu</title>
                <path d='M0 0h20v20H0z' fill='none' />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 4h20v2H0V4zm0 5h20v2H0V9zm0 5h20v2H0v-2z'
                  fill='black'
                />
              </svg>
            </button>
          </div>
          <div className='w-full block flex-grow justify-end lg:flex lg:items-center lg:w-auto'>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4'
            >
              About
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-4'
            >
              Projects
            </a>
            <a
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black'
            >
              Contact
            </a>
        </div>
    </nav>
    ) 
}