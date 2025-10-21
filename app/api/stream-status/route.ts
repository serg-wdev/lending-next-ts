import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Проверяем статус стрима через Kick API
    const response = await fetch('https://kick.com/api/v2/channels/mellstroy987', {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: 30 }, // Кэшируем на 30 секунд
    });

    if (!response.ok) {
      throw new Error('Failed to fetch stream status');
    }

    const data = await response.json();
    
    // Проверяем, идет ли стрим
    const isLive = data.livestream !== null && data.livestream !== undefined;

    return NextResponse.json({ 
      isLive,
      viewerCount: isLive ? data.livestream?.viewer_count || 0 : 0
    });
  } catch (error) {
    console.error('Error fetching stream status:', error);
    // В случае ошибки возвращаем offline
    return NextResponse.json({ isLive: false, viewerCount: 0 });
  }
}

