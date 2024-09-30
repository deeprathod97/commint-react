import React, { useState } from 'react';
import './App.css';
import { FaThumbsUp, FaCommentAlt } from 'react-icons/fa'; 

function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  const handleAddComment = () => {
    if (input.trim()) {
      setComments([...comments, { text: input, likes: 0 }]); 
      setInput('');
    }
  };

  const handleLike = (index) => {
    const newComments = [...comments];
    newComments[index].likes += 1;
    setComments(newComments);
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      
      <div className="comment-input">
        <input 
          type="text" 
          value={input} 
          placeholder="Enter your comment" 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>

      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <p>{comment.text}</p>
            <div className="comment-actions">
              <FaThumbsUp 
                className="icon like-icon" 
                onClick={() => handleLike(index)} 
              /> 
              <span>{comment.likes} Likes</span>
              <FaCommentAlt className="icon comment-icon" />
              <span>Reply</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
