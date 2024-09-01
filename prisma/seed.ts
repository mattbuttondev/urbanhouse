import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const rooms = [
    {
      title: "Cozy Mountain Cabin",
      image:
        "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1200&q=80",
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
