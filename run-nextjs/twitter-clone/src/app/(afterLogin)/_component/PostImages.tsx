import style from '@/app/(afterLogin)/_component/post.module.css';
import Link from 'next/link';
import cx from 'classnames';

type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;

  switch (post.Images.length) {
    case 1:
      return (
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={cx(style.postImageSection, style.oneImage)}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: 'contain',
          }}
        >
          <img src={post.Images[0]?.link} alt='' />
        </Link>
      );
    case 2:
      return (
        <div className={cx(style.postImageSection, style.twoImage)}>
          {post.Images.map((image, index) => (
            <Link
              key={index}
              href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
              style={{
                backgroundImage: `url(${image.link})`,
                backgroundSize: 'cover',
              }}
            />
          ))}
        </div>
      );
    case 3:
      return (
        <div className={cx(style.postImageSection, style.threeImage)}>
          {post.Images.map((image, index) => (
            <Link
              key={index}
              href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
              style={{
                backgroundImage: `url(${image.link})`,
                backgroundSize: 'cover',
              }}
            />
          ))}
        </div>
      );
    case 4:
      return (
        <div className={cx(style.postImageSection, style.fourImage)}>
          {post.Images.map((image, index) => (
            <Link
              key={index}
              href={`/${post.User.id}/status/${post.postId}/photo/${image.imageId}`}
              style={{
                backgroundImage: `url(${image.link})`,
                backgroundSize: 'cover',
              }}
            />
          ))}
        </div>
      );
    default:
      return null;
  }
}
