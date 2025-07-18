import mongoose, { Document, Schema, models } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name.'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide your email address.'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address.'],
    trim: true,
  },
  message: {
    type: String,
    required: [true, 'Please provide a message.'],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// To prevent model overwrite errors in Next.js hot-reloading,
// we check if the model is already defined before creating it.
const Contact = models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
