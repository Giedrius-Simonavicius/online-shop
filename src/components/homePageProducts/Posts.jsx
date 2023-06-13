import React from 'react';
import Card from '../card/Card';

function Posts({ posts }) {
  return (
    <div className="container mx-auto">
      <h2 className="mb-4 text-lg font-bold">
        Follow us on Instagram for News, Offers & More
      </h2>

      <div className="flex flex-wrap">
        {posts.map((post) => (
          <Card key={post.id}>
            <img loading="lazy" src={post.thumbnail} alt={post.id} />
            <p className="mx-auto mt-2 w-48 text-center text-xs font-normal">
              {post.text}
            </p>
            <p className="mb-6 mt-3 text-center text-xxs font-light text-color5">
              {post.date}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Posts;
