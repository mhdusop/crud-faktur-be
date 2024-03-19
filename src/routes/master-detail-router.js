import express from "express";
import {
   getByUuidFakturController,
   createMasterDetailController,
   updateMasterDetailController,
   deleteMasterDetailController
} from "../controller/master-detail-controller.js";

const masterDetailRouter = express.Router()

masterDetailRouter.get('/get/master-detail/:uuid_faktur', getByUuidFakturController);
masterDetailRouter.post('/create/master-detail', createMasterDetailController);
masterDetailRouter.put('/update/master-detail/:uuid', updateMasterDetailController);
masterDetailRouter.delete('/delete/master-detail/:uuid', deleteMasterDetailController);

export default masterDetailRouter;