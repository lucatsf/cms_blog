import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components';

import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <div className="container mx-auto flex px-10 mb-8">
      <Head>
        <title>Lucas Torres</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='inline-block m-auto'>
        <div className='text-center items-center justify-center'>
          {posts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>
        {/* <div className='lg:col-sapn-4 col-span-1'>
              <div className='lg:sticky relative top-8'>
                <PostWidget />
                <Categories />
              </div>
        </div> */}
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
