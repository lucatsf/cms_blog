import React from 'react'
import { getPosts, getPostDetails } from '../../services'
import { PostDetail, Author, Comments, CommentsForm } from '../../components'
import Head from 'next/head'

type Post = {
  author: Author,
  slug: string,
}

type Author = {
  name: string,
  avatar: string,
}

const PostDetails = (post: Post) => {
  return (
    <>
      <div className='mx-auto px-10 mb-8 inline-block m-auto'>
        <PostDetail post={post}/>
        <Author author={post.author} />
        <CommentsForm slug={post.slug}/>
        <Comments slug={post.slug}/>
      </div>
    </>
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

