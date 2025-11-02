import { env } from '@/env';
import { NextResponse } from 'next/server';

const LABS_TOKEN_ADDRESS = 'LABSh5DTebUcUbEoLzXKCiXFJLecDFiDWiBGUU1GpxR';
const BIRDEYE_API_BASE_URL = 'https://public-api.birdeye.so';

export async function GET() {
  try {
    const response = await fetch(
      `${BIRDEYE_API_BASE_URL}/defi/token_overview?address=${LABS_TOKEN_ADDRESS}`,
      {
        headers: {
          'X-API-KEY': env.NEXT_BIRDEYE_API_KEY,
        },
        next: {
          revalidate: 300, // Revalidate every 5 minutes (300 seconds)
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Birdeye API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Extract holder count from the response
    const holderCount = data?.data?.holder ?? null;

    return NextResponse.json({
      success: true,
      holder: holderCount,
    });
  } catch (error) {
    console.error('Error fetching token overview:', error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to fetch token overview',
        holder: null,
      },
      { status: 500 }
    );
  }
}
