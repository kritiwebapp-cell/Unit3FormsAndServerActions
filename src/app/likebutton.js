"use client";

import {
  useOptimistic,
  useState,
  startTransition
} from "react";

import { saveLike } from "./action";

export default function LikeButton() {
  const [likes, setLikes] = useState(10);
  const [message, setMessage] = useState("");

  const [optimisticLikes, addLike] =
    useOptimistic(
      likes,
      (currentLikes) => currentLikes + 1
    );

  async function handleLike() {
    setMessage("");

    // Immediately increase UI
    startTransition(() => {
      addLike();
    });

    try {
      // Call Server Action
      await saveLike();

      // Server succeeded
      setLikes(
        (currentLikes) => currentLikes + 1
      );

      setMessage(
        "Like saved successfully!"
      );
    } catch (error) {
      // Server failed
      setMessage(
        "Like failed. Rolled back!"
      );
    }
  }

  return (
    <div>
      <p>❤️ Likes: {optimisticLikes}</p>

      <button onClick={handleLike}>
        ❤️ Like
      </button>

      <p>{message}</p>
    </div>
  );
}