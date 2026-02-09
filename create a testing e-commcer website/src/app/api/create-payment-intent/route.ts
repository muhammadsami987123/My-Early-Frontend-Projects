import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe('YOUR_SECRET_KEY', { apiVersion: '2020-08-27' }); // Replace with your Stripe secret key

export async function POST(request: Request) {
  const { amount } = await request.json();

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Change to your desired currency
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 