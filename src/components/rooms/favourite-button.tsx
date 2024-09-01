"use client";

import { MouseEvent, useState } from "react";
import { Heart, HeartFill } from "../icons";

interface FavouriteButtonProps {
  className?: string;
}

const FavouriteButton = ({ className }: FavouriteButtonProps) => {
  const [isFavourited, setIsFavourited] = useState(false);

  const toggleFavourited = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsFavourited((prev) => !prev);
  };

  return (
    <button className={className} onClick={toggleFavourited}>
      {isFavourited ? (
        <HeartFill className="text-danger-400" />
      ) : (
        <Heart className="text-white" />
      )}
    </button>
  );
};

export default FavouriteButton;
