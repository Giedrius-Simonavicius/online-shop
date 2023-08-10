import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
import PropTypes from 'prop-types';
import { fetchItemsAndImages } from '../../helperFns';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await fetchItemsAndImages('posts');
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h2 className="mb-4 text-lg font-bold">
        Follow us on Instagram for News, Offers & More
      </h2>

      <div className="flex flex-wrap justify-around">
        {posts.map((post) => (
          <Card key={post.name}>
            {post.thumbnail && (
              <img loading="lazy" src={post.thumbnailURL} alt={post.name} />
            )}
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
      date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

export default Posts;
