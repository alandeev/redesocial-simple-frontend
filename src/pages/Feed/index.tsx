/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';

import {
  Container,
  Posts,
  FeedNavagation,
  Post,
  PostTitle,
  PostDescription,
  PostImage,
  PostAuthor,
} from './styles';

interface IPost {
  id: string;
  title: string;
  author: string;
  author_id: string;
  description?: string;
  image?: string;
}

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const defaultPost: IPost = {
      id: '',
      author: 'Miguel',
      author_id: '0',
      title: 'Como ser rico',
      description: 'Vou ensinar como ser rico, basta querer',
      image: 'https://scrubbing.in/wp-content/uploads/2020/01/denys-nevozhai-z0nvqfroqwa-unsplash.jpg',
    };

    async function GetPosts() {
      const newPosts: IPost[] = [];
      for (let i = 0; i < 10; i += 1) {
        newPosts.push({
          ...defaultPost,
          id: `${i}`,
        });
      }

      setPosts(newPosts);
    }

    GetPosts();
  }, []);

  return (
    <Container>
      <Header area="he" active="home" />

      {/* <FeedNavagation /> */}

      <Posts>
        {posts.map((post) => (
          <Post key={post.id}>
            <PostAuthor>{post.author}</PostAuthor>
            {post.image && <PostImage src={post.image} />}
            <PostTitle>{post.title}</PostTitle>
            {post.description && <PostDescription>{post.description}</PostDescription>}
          </Post>
        ))}
      </Posts>
    </Container>
  );
};

export default Feed;
