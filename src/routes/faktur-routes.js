import express from "express";
import {
   createFakturController,
   getAllFakturController,
   getFakturByIdController,
   updateFakturController,
   deleteFakturController,
} from "../controller/faktur-controller.js";
import { fakturValidation } from "../validation/faktur-validation.js";

const router = express.Router();

router.get('/get/fakturs', getAllFakturController);
router.get('/get/faktur/:id', getFakturByIdController);
router.post('/create/faktur', createFakturController);
router.put('/update/faktur/:id', updateFakturController)
router.delete('/delete/faktur/:id', deleteFakturController)

export default router;
