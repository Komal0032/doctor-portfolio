import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Form data received:', body);
    
    // For now, just return success (testing)
    return NextResponse.json({ 
      success: true, 
      message: 'Email would be sent here' 
    });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process request' },
      { status: 500 }
    );
  }
}