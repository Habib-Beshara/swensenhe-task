import { Schema, model } from 'mongoose';

const mockSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const mockModel = model('Mock', mockSchema);

export default mockModel;
