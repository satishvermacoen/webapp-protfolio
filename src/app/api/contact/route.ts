import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
  try {
    await connectToDatabase();

    const body = await request.json();
    
    // --- Mongoose Validation ---
    // The validation is now handled by the Mongoose schema.
    // We just need to create a new document and save it.
    const newContactMessage = new Contact(body);
    await newContactMessage.save();

    return NextResponse.json({ message: 'Message sent successfully! We will get back to you soon.' }, { status: 201 });

  } catch (error) {
    console.error('API Error:', error);

    // --- Handle Validation Errors from Mongoose ---
    // Check if it's a Mongoose validation error in a type-safe way
    if (error instanceof Error && error.name === 'ValidationError') {
      // The 'errors' property is specific to Mongoose's ValidationError.
      const mongooseError = error as unknown as { errors: { [key: string]: { message: string } } };
      const messages = Object.values(mongooseError.errors).map(
        (err) => err.message
      );
      return NextResponse.json({ error: `Validation failed: ${messages.join(', ')}` }, { status: 400 });
    }

    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: `Failed to send message. Server error: ${errorMessage}` }, { status: 500 });
  }
}
