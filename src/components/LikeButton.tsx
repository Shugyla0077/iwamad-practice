import { useLikes } from '../context/LikesContext'

export const LikeButton = () => {
  const { likes, addLike } = useLikes()

  return (
    <button
      id="like-btn"
      onClick={addLike}
      className="like-button mb-6 px-4 py-2 rounded-full font-medium transition-all"
    >
      ♥ {likes}
    </button>
  )
}
