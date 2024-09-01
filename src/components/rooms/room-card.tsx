import { calculateDiscountPercentage, formatPrice } from "@/utils/formatting";
import { Room } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Bathtub, Bed, DiscountPercentFill, People, Pin } from "../icons";
import Attribute from "./attribute";
import FavouriteButton from "./favourite-button";
import Rating from "./rating";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const { id, images, title } = room;
  const { region, city, country } = room.location;
  const { beds, guests, baths } = room.attributes;
  const { was, amount } = room.price;

  const primaryImage = images.find((image) => image.isPrimary);

  if (!primaryImage) {
    throw new Error("Invalid primary image");
  }

  const discountPercentage = was
    ? Math.floor(calculateDiscountPercentage(was, amount))
    : null;

  return (
    <Link href={`/rooms/${id}`}>
      <div className="relative h-48">
        {/* Image */}
        <Image
          src={primaryImage.url}
          alt={primaryImage.alt}
          className="rounded-2xl object-cover"
          fill
          sizes="400"
        />

        {/* Discount Flag */}
        {discountPercentage && (
          <div className="absolute left-2 top-2 flex items-center gap-2 rounded-full bg-danger-400 px-3 py-2 text-white">
            <DiscountPercentFill className="w-5" />
            <p className="font-medium">{discountPercentage}% Off</p>
          </div>
        )}

        {/* Favourite Button */}
        <div className="absolute right-2 top-2">
          <FavouriteButton className="rounded-full bg-black/30 p-2 text-white backdrop-blur-sm hover:cursor-pointer hover:bg-black/40" />
        </div>
      </div>

      <div className="mt-2">
        {/* Title */}
        <p className="font-medium text-accent-600">{title}</p>

        {/* Location */}
        <div className="mt-2 flex items-center gap-2">
          <Pin className="w-4" />
          <p className="font-medium text-accent-400">
            {`${region ? region + ", " : ""}${city} • ${country}`}
          </p>
        </div>

        {/* Attributes */}
        <div className="mt-2 flex gap-2">
          <Attribute
            icon={<Bed className="w-5" />}
            label={`${beds} Bed${beds > 1 ? "s" : ""}`}
          />
          <Attribute
            icon={<People className="w-5" />}
            label={`${guests} Guest${guests > 1 ? "s" : ""}`}
          />
          <Attribute
            icon={<Bathtub className="w-5" />}
            label={`${baths} Bath${baths > 1 ? "s" : ""}`}
          />
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Price */}
          <div className="mt-2 flex items-center gap-2">
            {was && (
              <p className="font-medium text-danger-500 line-through">
                {formatPrice(was)}
              </p>
            )}
            <p className="font-medium text-primary-400">
              {formatPrice(amount)}
            </p>
          </div>

          {/* Reviews */}
          <Rating rating={4.75} />
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
