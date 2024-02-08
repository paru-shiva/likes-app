import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    userName: '',
    userComment: '',
    commentsList: [],
  }

  onDeleteButtonClick = id => {
    const {commentsList} = this.state
    this.setState(() => ({
      commentsList: commentsList.filter(eachComment => eachComment.id !== id),
    }))
  }

  onLikeButtonClick = id => {
    const {commentsList} = this.state
    this.setState(() => ({
      commentsList: commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onComment = event => {
    const {userName, userComment} = this.state
    event.preventDefault()
    const newComment = {
      userName,
      userComment,
      isLiked: false,
      commentedDate: new Date(),
      id: uuidv4(),
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      userName: '',
      userComment: '',
    }))
  }

  onUsernameInput = event => {
    this.setState(() => ({userName: event.target.value}))
  }

  onUsercommentInput = event => {
    this.setState(() => ({userComment: event.target.value}))
  }

  render() {
    const {commentsList, userName, userComment} = this.state

    const commentsCount = commentsList.length

    console.log(userName, userComment)

    return (
      <div className="comments-component">
        <div className="comments-input-card">
          <h1>Comments</h1>
          <p>Say something about 4.0 Technologies</p>
          <form className="comments-form" onSubmit={this.onComment}>
            <input
              type="text"
              placeholder="Your Name"
              className="your-name-field"
              onChange={this.onUsernameInput}
              value={userName}
            />
            <textarea
              rows="6"
              cols="20"
              placeholder="Your Comment"
              className="your-comment-field"
              onChange={this.onUsercommentInput}
              value={userComment}
            />
            <button type="submit" className="submit-btn">
              Add Comment
            </button>
          </form>
        </div>
        <div className="comments-image">
          <img
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <div className="user-comments">
          <p>{commentsCount} Comments</p>
          <ul type="none">
            {commentsList.map(eachComment => (
              <CommentItem
                onDeleteButtonClick={this.onDeleteButtonClick}
                onLikeButtonClick={this.onLikeButtonClick}
                key={eachComment.id}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
