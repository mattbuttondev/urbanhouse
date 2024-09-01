import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rooms = [
    {
      title: "Cozy Mountain Cabin",
      image:
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
      description:
        "Escape to this charming mountain cabin, where rustic elegance meets modern comfort. Nestled amidst the breathtaking peaks of Aspen, this cozy retreat features a warm, inviting interior with a stone fireplace and wooden beams that create a perfect ambiance for relaxation. Enjoy the stunning views from the wraparound deck or embark on outdoor adventures like hiking, skiing, and mountain biking right at your doorstep. With two comfortable bedrooms, a fully equipped kitchen, and easy access to local dining and shopping, this cabin is perfect for families or couples seeking a memorable getaway.",
      location: {
        city: "Aspen",
        region: "Colorado",
        country: "United States",
      },
      attributes: {
        beds: 2,
        guests: 4,
        baths: 1,
      },
      price: {
        was: 250,
        amount: 200,
      },
    },
    {
      title: "Beachfront Villa",
      image:
        "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      description:
        "Experience the ultimate tropical escape in this luxurious beachfront villa located in the heart of Seminyak, Bali. This stunning property boasts three spacious bedrooms, each with en-suite bathrooms, offering privacy and comfort for families or groups. Step outside to find yourself on a pristine sandy beach, where you can soak up the sun or enjoy a refreshing swim in the crystal-clear waters. The villa features an expansive outdoor area with a private pool, lush gardens, and a shaded terrace perfect for al fresco dining. With world-class dining, shopping, and vibrant nightlife just moments away, this villa is an idyllic choice for those seeking both relaxation and adventure.",
      location: {
        city: "Bali",
        region: "Seminyak",
        country: "Indonesia",
      },
      attributes: {
        beds: 3,
        guests: 6,
        baths: 2,
      },
      price: {
        amount: 350,
      },
    },
    {
      title: "Urban Loft",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      description:
        "Discover the vibrant energy of New York City from this stylish urban loft located in a trendy neighborhood. This chic space features high ceilings, large windows, and an open floor plan that creates a bright and airy atmosphere. Perfect for couples or solo travelers, the loft includes a cozy bedroom, a modern kitchen equipped with top-of-the-line appliances, and a comfortable living area to unwind after a day of exploring. Step outside to find yourself surrounded by some of the city's best restaurants, cafes, and cultural attractions, making it the ideal base for your New York adventure.",
      location: {
        city: "New York",
        region: "New York",
        country: "United States",
      },
      attributes: {
        beds: 1,
        guests: 2,
        baths: 1,
      },
      price: {
        was: 180,
        amount: 150,
      },
    },
    {
      title: "Rustic Farmhouse",
      image:
        "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?auto=format&fit=crop&w=1200&q=80",
      description:
        "Immerse yourself in the enchanting beauty of Tuscany at this rustic farmhouse, where traditional charm meets modern amenities. With four spacious bedrooms and three bathrooms, this property is perfect for family gatherings or group retreats. The farmhouse features a large kitchen with a dining area that opens up to a sun-drenched patio, ideal for enjoying meals al fresco while taking in the stunning views of the rolling hills and vineyards. Explore the surrounding countryside, visit local wineries, or simply relax by the pool. This farmhouse offers a unique opportunity to experience the authentic Tuscan lifestyle while enjoying all the comforts of home.",
      location: {
        city: "Tuscany",
        region: "Florence",
        country: "Italy",
      },
      attributes: {
        beds: 4,
        guests: 8,
        baths: 3,
      },
      price: {
        amount: 280,
      },
    },
    {
      title: "Treehouse Retreat",
      image:
        "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=1200&q=80",
      description:
        "Reconnect with nature in this unique treehouse retreat, nestled high among the lush canopies of Costa Rica's stunning rainforest. Ideal for couples or solo travelers, this cozy treehouse features a comfortable bedroom, a private bathroom, and a charming living area with panoramic views of the surrounding wildlife. Spend your days exploring the vibrant flora and fauna, hiking nearby trails, or simply relaxing on your private balcony while listening to the soothing sounds of the jungle. With its tranquil setting and eco-friendly design, this treehouse offers a truly unforgettable escape for nature lovers and adventure seekers alike.",
      location: {
        city: "Costa Rica",
        region: "Puntarenas",
        country: "Costa Rica",
      },
      attributes: {
        beds: 1,
        guests: 2,
        baths: 1,
      },
      price: {
        was: 220,
        amount: 180,
      },
    },
  ];

  for (const room of rooms) {
    await prisma.room.create({
      data: room,
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
