import React from 'react';

import moment from 'moment';

const PostDetail = ({ post }: {post:any}) => {
  const getContentFragment = (index: any, text:any, obj:any, type:any) => {
    let modifiedText = text;

    if (obj) {
      let mystyles = {
        '-webkitUserModify': 'read-write-plaintext-only',
      } as React.CSSProperties;

      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.href) {
        modifiedText = (
          <a href={obj.href} key={index} style={{fontStyle: 'italic', textDecoration: 'underline'}}>
            {obj.children[0].text}
          </a>
        );
      }

      if (obj.type && obj.type == 'code-block') {
        modifiedText = (
          <div style={{background: 'gray', color: 'currentColor', borderRadius: '10px;'}} >
            <code key={index} style={mystyles}>
              {text}
            </code>
          </div>
        );
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>);
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>);
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item:any, i:any) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6 max-h-96 max-w-4xl mx-auto flex">
          <img src={post.featureImage.url} alt="" className="object-top h-full w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg max-h-96 max-w-4xl" />
        </div>
        <div className="px-4 lg:px-0">
          <div className="flex items-center mb-8 w-full">
            <div className="hidden md:flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center">
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
              />
              <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
            </div>
            <div className="font-medium text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="align-middle">{moment(post.createdAt).format('DD MMM, YYYY')}</span>
            </div>
          </div>
          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
          <div className='text-lg'>
            {post.content.raw.children.map((typeObj: any, index:any) => {
              const children = typeObj.children.map((item:any, itemindex:any) => getContentFragment(itemindex, item.text, item, null));

              return getContentFragment(index, children, typeObj, typeObj.type);
            })}
          </div>
        </div>
      </div>

    </>
  );
};

export default PostDetail;
