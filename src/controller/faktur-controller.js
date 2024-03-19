import {
   createFakturService,
   getAllFakturService,
   getFakturByIdService,
   updateFakturService,
   deleteFakturService
} from "../service/faktur-service.js";
import { generateNoFaktur } from "../utils/unique-faktur-code.js";


export const createFakturController = async (req, res) => {
   try {
      const {
         no_faktur,
         customer_name,
         phone,
         faktur_date
      } = req.body

      const noFaktur = generateNoFaktur(no_faktur)

      const newFaktur = await createFakturService({
         no_faktur: noFaktur,
         customer_name,
         phone,
         faktur_date
      });

      res.json({
         status_code: 201,
         message: "Create Faktur Successfully",
         data: newFaktur
      });

   } catch (error) {
      console.error('Error creating faktur:', error);
   }
}

// Get all faktur
export const getAllFakturController = async (req, res) => {
   try {
      const fakturs = await getAllFakturService();

      res.json({
         status_code: 200,
         message: "Success",
         data: fakturs
      });

   } catch (error) {
      console.error('Error fetching fakturs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Get Faktur by id 
export const getFakturByIdController = async (req, res) => {
   const uuidFaktur = req.params.id;
   try {

      const faktur = await getFakturByIdService(uuidFaktur);

      if (!faktur) {
         return res.status(404).json({ error: 'Faktur not found' });
      }

      return res.status(200).json({
         status_code: 200,
         message: "Success",
         data: faktur
      });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
   }
};

// Update faktur
export const updateFakturController = async (req, res) => {
   try {
      const uuidFaktur = req.params.id
      const {
         no_faktur,
         customer_name,
         phone,
         faktur_date
      } = req.body

      const noFaktur = generateNoFaktur(no_faktur)

      const fakturUpdate = await updateFakturService(uuidFaktur, {
         no_faktur: noFaktur,
         customer_name,
         phone,
         faktur_date
      });

      res.status(200).json({
         status_code: 200,
         message: "Updated",
         data: fakturUpdate
      });

   } catch (error) {
      console.error('Error updating faktur:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Delete Faktur
export const deleteFakturController = async (req, res) => {
   try {
      const uuidFaktur = req.params.id;

      await deleteFakturService(uuidFaktur);

      res.json({
         status_code: 200,
         message: 'Faktur deleted successfully'
      });
   } catch (error) {
      console.error('Error deleting faktur:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};