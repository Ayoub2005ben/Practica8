import { useState, useEffect } from 'react';
import { db } from 'firebase'; // Ajusta la ruta si es necesario

import { ref, onValue, set } from 'firebase/database';

export default function LikeCounter({ postId }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const likesRef = ref(db, `posts/${postId}/likes`);
    onValue(likesRef, (snapshot) => {
      setLikes(snapshot.val() || 0);
    });
  }, [postId]);

  const handleLike = () => {
    const likesRef = ref(db, `posts/${postId}/likes`);
    set(likesRef, likes + 1);
  };

  return (
    <div className="flex items-center mt-4">
      <button
        onClick={handleLike}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        👍 Like
      </button>
      <span className="ml-2 text-lg">{likes}</span>
    </div>
  );
}
