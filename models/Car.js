import mongoose from 'mongoose';

/**
 * 1.- Crear un schema (esqueleto) ✅
 * 2.- Crear modelo, asignando un nombre ✅
 */

const carSchema = new mongoose.Schema({
  //Campo -> tipo de dato
  plate: {
    type: String,
    required: true,
  },
  model: String,
  brand: String,
  version: String,
  color: String,
  carType: String,
  vin: String,
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

// NOTE: Cap singular

export default mongoose.model('Car', carSchema);