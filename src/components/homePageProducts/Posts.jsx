import React from 'react';
import Card from '../card/Card';

function Posts({ posts }) {
  return (
    <div className="container mx-auto">
      <h2 className="text-lg font-bold mb-4">
        Follow us on Instagram for News, Offers & More
      </h2>

      <div className="flex flex-wrap">
        {posts.map((post) => (
          <Card key={post.id}>
            <img src={post.thumbnail} alt={post.id} />
            <p className="text-xs text-center w-48 mx-auto font-normal mt-2">
              {post.text}
            </p>
            <p className="mt-3 mb-6 text-color5 text-xxs font-light text-center">
              {post.date}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Posts;
