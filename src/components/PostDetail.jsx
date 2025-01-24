import LikeButton from './LikeButton';

const PostDetail = ({ post }) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <img src={post.image_url} alt={post.title} />
      <p>{post.content}</p>
      <LikeButton />
    </article>
  );
};

export default PostDetail;
