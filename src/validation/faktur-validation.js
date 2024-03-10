import { Joi, validate } from 'express-validation';

const createFaktur = {
   body: Joi.object({
      no_faktur: Joi.string().required(),
      nama_barang: Joi.string().required(),
      quantity: Joi.number().integer().required(),
      harga: Joi.number().integer().required(),
      nama_pelanggan: Joi.string().max(30).required(),
      phone: Joi.string().max(13).required(),
      tgl_faktur: Joi.string().required(),
   }),
};

export const fakturValidation = {
   createFaktur: validate(createFaktur),
};