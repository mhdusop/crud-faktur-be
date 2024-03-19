import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export const getByUuidFakturService = async (id) => {
   try {
      return prisma.master_Detail.findMany({
         where: {
            faktur_uuid: id
         }
      });
   } catch (error) {
      console.log(error);
   }
}

export const createMasterDetailService = async (data) => {
   try {
      return prisma.master_Detail.create({ data });
   } catch (error) {
      console.log(error);
   }
}

export const updateMasterDetailService = async (id, data) => {
   try {
      return prisma.master_Detail.update({ where: { uuid: id }, data });
   } catch (error) {
      console.log(error);
   }
}

export const deleteMasterDetailService = async (id) => {
   try {
      return prisma.master_Detail.delete({ where: { uuid: id } });
   } catch (error) {
      console.log(error);
   }
}


