import prisma from "@/utils/prisma";

export const getRooms = async () => {
  return await prisma.room.findMany();
};
