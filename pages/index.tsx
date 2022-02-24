import Head from 'next/head'
import { PostCard } from '../components';
import { getPosts } from '../services';

type Posts = {
  posts: {
    id: number,
    node: object
  }[]
}

export default function Home({ posts }: Posts) {
  return (
    <div className="container mx-auto flex px-10 mb-8">
      <Head>
        <title>Lucas Torres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='inline-block m-auto'>
        <div className='text-center items-center justify-center'>
          {posts.map((post) => <PostCard post={post.node} key={post.node.slug} />)}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}
