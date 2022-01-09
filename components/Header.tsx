import React, { useContext } from 'react'

import Link from 'next/link';

const categories = [
    {name: 'React', slug: 'react'},
    {name: 'Web', slug: 'Web'}
];

const Header = () => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='border-b w-full inline-block border-blue-800 py-8'>
                <div className='md:float-left block'>
                    <Link href='/'>
                        <span className='cursor-pointer font-bold text-4xl text-white'>
                            Lucas Torres
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-right md:contents'>
                    <Link href='https://github.com/lucatsf'>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-gray-400'>
                            Github
                        </span>
                    </Link>

                    <Link href='https://www.linkedin.com/in/torresfelicio/'>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-blue-700'>
                            Linkedin
                        </span>
                    </Link>

                    <Link href='https://twitter.com/lucatsf'>
                        <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer hover:text-blue-400'>
                            Twitter
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header

