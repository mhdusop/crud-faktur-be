import {
   getByUuidFakturService,
   createMasterDetailService,
   updateMasterDetailService,
   deleteMasterDetailService
} from "../service/master-detail-service.js";

// get by uuid faktur
export const getByUuidFakturController = async (req, res) => {
   const uuid_faktur = req.params.uuid_faktur;
   try {
      const master_detail = await getByUuidFakturService(uuid_faktur);
      res.json({
         status_code: 200,
         message: "Success",
         data: master_detail
      })
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// create master detail
export const createMasterDetailController = async (req, res) => {
   const {
      product_name,
      quantity,
      price,
      faktur_uuid
   } = req.body;

   const sumTotal = quantity * price

   try {
      const newMasterDetail = await createMasterDetailService({
         product_name,
         quantity,
         price,
         total: sumTotal,
         faktur_uuid
      });
      res.json({
         status_code: 201,
         message: "Master Detail Created",
         data: newMasterDetail
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// update master detail
export const updateMasterDetailController = async (req, res) => {
   const id = req.params.uuid;
   const {
      product_name,
      quantity,
      price,
      faktur_uuid
   } = req.body;

   const sumTotal = quantity * price

   try {
      const result = await updateMasterDetailService(id, {
         product_name,
         quantity,
         price,
         total: sumTotal,
         faktur_uuid
      });
      res.json({
         status_code: 200,
         message: "Master Detail Updated",
         data: result
      });
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// delete master detail
export const deleteMasterDetailController = async (req, res) => {
   const id = req.params.uuid;
   try {
      const result = await deleteMasterDetailService(id);
      res.json({
         status_code: 200,
         message: "Master Detail Deleted",
         data: result
      });
   } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
   }
};