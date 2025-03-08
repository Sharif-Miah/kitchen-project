import { getRecipeById } from '@/data/categories';
import { NextResponse } from 'next/server';

export async function GET(reques, { params: { id } }) {
  const data = await getRecipeById(id);
  return NextResponse.json(data);
}
