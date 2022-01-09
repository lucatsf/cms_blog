import React from 'react'

import { getPosts, getPostDetails } from '../../services'

import { PostDetail, Author, Comments, CommentsForm } from '../../components'

const PostDetails = ({ post }) => {
  return (
    <div className='container mx-auto px-10 mb-8 '>
      <div>
        <div className='col-span-1 lg:col-sapn-8'>
          <PostDetail post={post}/>
          <Author author={post.author} />
          <CommentsForm slug={post.slug}/>
          <Comments slug={post.slug}/>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug)

  return {
    props: { post: data }
  }
}

export async function getStaticPaths() {
  const posts = await getPosts()

  return {
    paths: posts.map(({ node: { slug }}) => ({ params: { slug }})),
    fallback: false
  }
}

