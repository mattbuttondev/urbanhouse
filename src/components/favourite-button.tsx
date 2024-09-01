"use client";

import { MouseEvent, useState } from "react";
import { HeartFill } from "./icons";

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
        <HeartFill className="stroke-white stroke-2 text-danger-400" />
      ) : (
        <HeartFill className="stroke-white stroke-2 text-transparent" />
      )}
    </button>
  );
};

export default FavouriteButton;
