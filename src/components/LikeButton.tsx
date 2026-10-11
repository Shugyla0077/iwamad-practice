import { useLikes } from '../context/LikesContext'
import { Button } from './ui/Button'

export const LikeButton = () => {
  const { likes, addLike } = useLikes()

  return (
    <Button
      id="like-btn"
      variant="primary"
      onClick={addLike}
      aria-label={`Like (${likes} ${likes === 1 ? 'like' : 'likes'})`}
      className="like-button mb-6"
    >
      ♥ {likes}
    </Button>
  )
}