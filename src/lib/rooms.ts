import prisma from "@/utils/prisma";
import { Room } from "@prisma/client";

export const getRooms = async () => {
  return await prisma.room.findMany();
};

export const getRoom = async (id: Room["id"]) => {
  return await prisma.room.findUnique({
    where: { id },
  });
};
