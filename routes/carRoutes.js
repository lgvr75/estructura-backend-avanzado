import express from 'express';
import {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from '../controllers/carController.js';

import { authValidator } from '../middleware/authValidator.js';


const carRoutes = express.Router();

carRoutes.route('/').post(createCar).get(authValidator,  getAllCars);
carRoutes.route('/:carId').get(getCarById).put(updateCar).delete(deleteCar);

// carRoutes.post('/', createCar);
// carRoutes.get('/', getAllCars);
// carRoutes.get('/:carId', getCarById);
// carRoutes.put('/:carId', updateCar);
// carRoutes.delete('/:carId', deleteCar);

export default carRoutes;