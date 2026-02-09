import { NextResponse } from 'next/server';
import { products } from '@/data/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured');

  if (featured) {
    return NextResponse.json(products.filter(product => product.featured));
  }

  return NextResponse.json(products);
} 