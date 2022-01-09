import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
    console.log(post)
    return (
        <div className='shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <h1 className='text-white  text-center mb-8 cursor-pointer text-3xl font-semibold'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
                <img
                    src={post.featureImage.url}
                    alt={post.title}
                    className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
                />
            </div>
            <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
                <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
                    <img
                        src={post.author.photo.url}
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className='align-middle rounded-full mr-2'
                    />
                    <p className='text-gray-500 inline align-middle'>{post.author.name} </p>
                </div>
                <div className="font-medium text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('DD MMM, YYYY')}</span>
                </div>
            </div>
            <p className='text-gray-500 text-center text-lg px-4 lg:px-20 mb-8'>
                {post.excerp}
            </p>
            <div className='text-center'>
                <Link href={`/post/${post.slug}`}>
                    <span className='transition duration-500 transform hover:-translate-y-2 text-white inline-block bg-blue-800 text-lg font-medium rounded-full px-6 py-2 cursor-pointer'>
                        Leitura
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default PostCard

