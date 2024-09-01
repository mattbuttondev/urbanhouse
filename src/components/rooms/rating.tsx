import { StarFill } from "../icons";

interface RatingProps {
  rating: number;
}

const Rating = ({ rating }: RatingProps) => {
  return (
    <div className="flex items-center gap-1">
      <StarFill className="text-yellow-500" />
      <p className="font-medium">{rating}</p>
    </div>
  );
};

export default Rating;
