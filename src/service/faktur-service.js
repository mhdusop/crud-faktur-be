import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

export const createFakturService = async (data) => {
   try {
      return await prisma.faktur.create({ data });
   } catch (error) {
      console.log(error);
   }
};

export const getAllFakturService = async () => {
   try {
      return await prisma.faktur.findMany();
   } catch (error) {
      console.log(error);
   }
};

export const getFakturByIdService = async (id) => {
   try {
      return await prisma.faktur.findUnique({
         where: {
            uuid: id,
         },
      });
   } catch (error) {
      console.log(error);
   }
};

export const updateFakturService = async (id, data) => {
   try {
      const updatedFaktur = await prisma.faktur.update({
         where: { uuid: id },
         data,
      });

      return updatedFaktur;
   } catch (error) {
      console.error('Error updating faktur in the service:', error);
      throw new Error('User update failed');
   }
};

export const deleteFakturService = async (id) => {
   try {
      await prisma.faktur.delete({ where: { uuid: id } });
   } catch (error) {
      console.log(error);
   }
};

