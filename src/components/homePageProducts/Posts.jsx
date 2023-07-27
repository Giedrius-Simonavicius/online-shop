import React from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-lg font-bold">
        Follow us on Instagram for News, Offers & More
      </h2>

      <div className="flex flex-wrap  justify-around">
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
Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Posts;
