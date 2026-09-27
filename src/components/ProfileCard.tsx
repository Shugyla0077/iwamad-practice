import { useState } from 'react';
import type { NavLink } from './NavLinkItem';
import { NavLinkItem } from './NavLinkItem';

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  links: NavLink[];
}

export const ProfileCard = ({ name, role, bio, avatarUrl, links }: ProfileCardProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <article className="profile-card bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full transition-all">
      <div className="card-content flex flex-col items-center text-center">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={name}
            className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-indigo-500"
          />
        )}
        <h2 className="text-xl font-semibold mb-1">{name}</h2>
        <p className="text-sm text-indigo-600 font-medium mb-3">{role}</p>

        <p className="text-sm text-gray-600 mb-6">{bio}</p>

        <button
          id="like-btn"
          onClick={toggleLike}
          className={`like-button mb-6 px-4 py-2 rounded-full font-medium transition-all ${
            isLiked ? 'liked' : ''
          }`}
        >
          {isLiked ? '❤️ Liked' : '🤍 Like'}
        </button>

        <div className="links-container flex justify-center gap-4 w-full pt-4 border-t border-gray-100">
          {links.length > 0 ? (
            links.map((link) => (
              <NavLinkItem key={link.id} item={link} />
            ))
          ) : (
            <span className="text-xs text-gray-400">No links provided</span>
          )}
        </div>
      </div>
    </article>
  );
};