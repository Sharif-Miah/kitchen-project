import { getOneDataById } from '@/data/recipes';
import { NextResponse } from 'next/server';

export async function GET(reques, { params: { id } }) {
  const data = await getOneDataById(id);
  return NextResponse.json(data);
}
