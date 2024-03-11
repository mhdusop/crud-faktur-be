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
         nama_barang,
         quantity,
         harga,
         nama_pelanggan,
         phone,
         tgl_faktur
      } = req.body

      const noFaktur = generateNoFaktur(no_faktur)
      const formatIntQuantity = parseInt(quantity)
      const formatIntHarga = parseInt(harga)

      const newFaktur = await createFakturService({
         no_faktur: noFaktur,
         nama_barang,
         quantity: formatIntQuantity,
         harga: formatIntHarga,
         nama_pelanggan,
         phone,
         tgl_faktur
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

      const totalHarga = fakturs.reduce((sum, faktur) => {
         const product = faktur.quantity * faktur.harga;
         return sum + product;
      }, 0);

      res.json({
         status_code: 200,
         message: "Success",
         data: {
            data_faktur: fakturs,
            total_harga: totalHarga
         }
      });

   } catch (error) {
      console.error('Error fetching fakturs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};

// Get Faktur by id 
export const getFakturByIdController = async (req, res) => {
   try {
      const idFaktur = req.params.id;

      const faktur = await getFakturByIdService(idFaktur);

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
      const fakturId = req.params.id
      const {
         no_faktur,
         nama_barang,
         quantity,
         harga,
         nama_pelanggan,
         phone,
         tgl_faktur
      } = req.body

      const noFaktur = generateNoFaktur(no_faktur)
      const formatIntQuantity = parseInt(quantity)
      const formatIntHarga = parseInt(harga)

      const fakturUpdate = await updateFakturService(fakturId, {
         no_faktur: noFaktur,
         nama_barang,
         quantity: formatIntQuantity,
         harga: formatIntHarga,
         nama_pelanggan,
         phone,
         tgl_faktur
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
      const fakturId = req.params.id;
      await deleteFakturService(fakturId);
      res.json({
         status_code: 200,
         message: 'Faktur deleted successfully'
      });
   } catch (error) {
      console.error('Error deleting faktur:', error);
      res.status(500).json({ error: 'Internal Server Error' });
   }
};