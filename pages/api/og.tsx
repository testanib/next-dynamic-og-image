// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

const  OgImageHandler = async (req: NextRequest)=> {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title')||'Mate'
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // const jsonData = await data.json()
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0477fc',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          // alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          color: 'white',
          fontSize: '120px',
          fontWeight: 'bolder',
          paddingTop: '180px',
          paddingBottom: '140px',
        }}>
          Join your team’s NIL Club
        </div>
        <div style={{
          color: 'white',
          fontSize: '60px',
          fontWeight: 'bolder',
          paddingBottom: '140px',
        }}>
          {title}
          </div>
      </div>
    ),
    {
      width: 1100,
      height: 2000,
    },
  );
}

export default OgImageHandler;