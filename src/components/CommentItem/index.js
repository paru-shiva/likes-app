// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, onLikeButtonClick, onDeleteButtonClick} = props
  const {userName, userComment, isLiked, commentedDate, id} = commentDetails

  const onLikeClick = () => {
    onLikeButtonClick(id)
  }

  const onDeleteClick = () => {
    onDeleteButtonClick(id)
  }

  const likeImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment">
      <p className="username-logo">{userName[0]}</p>
      <p className="username">{userName}</p>
      <p className="commented-date">{formatDistanceToNow(commentedDate)}</p>
      <p className="user-comment">{userComment}</p>
      <div className="like-delete-div">
        <button type="button" onClick={onLikeClick}>
          <img alt="like" src={likeImg} />
          <span>{isLiked ? 'Liked' : 'Like'}</span>
        </button>
        <button data-testid="delete" type="button" onClick={onDeleteClick}>
          <img
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
