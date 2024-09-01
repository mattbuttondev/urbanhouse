import heroImg from "@/assets/hero.png";
import { Hero, HeroContent, HeroImage } from "@/components/hero";
import { RoomCard } from "@/components/rooms";
import { getRooms } from "@/lib/rooms";

const HomePage = async () => {
  const rooms = await getRooms();

  return (
    <main>
      <section>
        <Hero>
          <HeroImage
            src={heroImg}
            alt="Hero"
            className="object-cover"
            dark
            fill
          />
          <HeroContent>
            <div className="container">
              <h2 className="text-4xl font-bold text-white">
                Explore, Discover, Invest in Your Future
              </h2>
            </div>
          </HeroContent>
        </Hero>
      </section>
      <section className="container my-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
