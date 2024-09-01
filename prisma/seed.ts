import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rooms = [
    {
      title: "Cozy Mountain Cabin",
      images: [
        {
          url: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
          isPrimary: true,
          alt: "A cozy mountain cabin with a stone fireplace and wooden beams.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A scenic view of a mountain landscape during sunset.",
        },
        {
          url: "https://images.unsplash.com/photo-1517841905240-472988d4b3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A warm and inviting interior of a mountain cabin.",
        },
        {
          url: "https://images.unsplash.com/photo-1519627615813-2c0b4a6c3b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A cozy reading nook by the window in a mountain cabin.",
        },
        {
          url: "https://images.unsplash.com/photo-1574169208505-7f9e9e9b4e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A wraparound deck with stunning mountain views.",
        },
      ],
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
      images: [
        {
          url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
          isPrimary: true,
          alt: "A luxurious beachfront villa with a private pool.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A pristine sandy beach with crystal-clear waters.",
        },
        {
          url: "https://images.unsplash.com/photo-1565575090-1f7e4c8e3c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "Outdoor dining area overlooking the beach.",
        },
        {
          url: "https://images.unsplash.com/photo-1533612020707-7c6f8e0c2e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A spacious bedroom with ocean views in the villa.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A relaxing lounge area by the pool.",
        },
      ],
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
      images: [
        {
          url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
          isPrimary: true,
          alt: "A stylish urban loft with high ceilings and large windows.",
        },
        {
          url: "https://images.unsplash.com/photo-1517841905240-472988d4b3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A cozy living area in a modern urban loft.",
        },
        {
          url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A modern kitchen with top-of-the-line appliances.",
        },
        {
          url: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A bright bedroom with natural light in an urban loft.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A view of the city skyline from the loft.",
        },
      ],
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
      images: [
        {
          url: "https://images.unsplash.com/photo-1505916349660-8d91a99c3e23?auto=format&fit=crop&w=1200&q=80",
          isPrimary: true,
          alt: "A rustic farmhouse surrounded by rolling hills.",
        },
        {
          url: "https://images.unsplash.com/photo-1565575090-1f7e4c8e3c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A large kitchen with a dining area in a farmhouse.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A sun-drenched patio perfect for al fresco dining.",
        },
        {
          url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A peaceful garden view from the farmhouse.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A cozy living room with a fireplace in the farmhouse.",
        },
      ],
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
      images: [
        {
          url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=1200&q=80",
          isPrimary: true,
          alt: "A unique treehouse retreat nestled in a rainforest.",
        },
        {
          url: "https://images.unsplash.com/photo-1517841905240-472988d4b3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A cozy living area with panoramic views in the treehouse.",
        },
        {
          url: "https://images.unsplash.com/photo-1565575090-1f7e4c8e3c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A private balcony overlooking the lush jungle.",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A tranquil setting surrounded by vibrant flora.",
        },
        {
          url: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxpaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
          isPrimary: false,
          alt: "A view of the treehouse high in the canopy.",
        },
      ],
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
