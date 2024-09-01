import Attribute from "@/components/attribute";
import ExpandableParagraph from "@/components/expandable-paragraph";
import { Bathtub, Bed, People } from "@/components/icons";
import Rating from "@/components/rating";
import { getRoom } from "@/lib/rooms";
import { Room } from "@prisma/client";
import { notFound } from "next/navigation";

interface RoomPageProps {
  params: {
    id: Room["id"];
  };
}

const RoomPage = async ({ params }: RoomPageProps) => {
  const { id } = params;

  const room = await getRoom(id);
  if (!room) notFound();

  const { image, title, description } = room;
  const { region, city, country } = room.location;
  const { beds, guests, baths } = room.attributes;
  const { was, amount } = room.price;

  return (
    <main className="my-8">
      {/* Images */}
      <section className="container flex h-[400px] gap-5">
        <div className="h-full w-full rounded-2xl bg-red-500"></div>
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-5">
          <div className="h-full w-full rounded-2xl bg-orange-500"></div>
          <div className="h-full w-full rounded-2xl bg-yellow-500"></div>
          <div className="h-full w-full rounded-2xl bg-green-500"></div>
          <div className="h-full w-full rounded-2xl bg-blue-500"></div>
        </div>
      </section>

      <section className="container mt-5 grid md:grid-cols-2">
        {/* Details */}
        <section>
          {/* Title */}
          <header>
            <h1 className="text-xl font-semibold">{room.title}</h1>
          </header>

          {/* Attributes */}
          <div className="mt-4 flex gap-2">
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

          {/* Rating */}
          <div className="mt-4 flex gap-2">
            <Rating rating={4.75} />
            <p className="font-medium text-neutral-500">(500+ Reviews)</p>
          </div>

          {/* Description */}
          <div className="mt-4 flex flex-col gap-4 border-t border-accent-200 pt-4">
            <h2 className="text-lg font-semibold">About Property</h2>
            <ExpandableParagraph
              className="font-medium text-neutral-500"
              text={description}
            />
          </div>
        </section>

        {/* Booking */}
        <section></section>
      </section>
    </main>
  );
};

export default RoomPage;
