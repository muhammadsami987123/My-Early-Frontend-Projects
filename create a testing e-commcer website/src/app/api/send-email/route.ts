import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email } = await request.json();

  // Here you would integrate with an email service
  // For example, using Nodemailer or a service like SendGrid

  console.log(`Sending email to ${email}...`);
  // Simulate email sending
  return NextResponse.json({ success: true });
} 