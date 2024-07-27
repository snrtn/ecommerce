import express from 'express';
import { addAddressController } from '../../controllers/mysql/addressController.js';

const router = express.Router();

router.post('/address', addAddressController);

export default router;
