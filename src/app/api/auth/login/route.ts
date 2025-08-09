
export async function POST(request: Request) {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(await request.json())
  });

  const response = Response.json(await res.json(), {
    status: res.status,
    headers: {
      ...(res.headers.get('set-cookie') && { 
        'Set-Cookie': res.headers.get('set-cookie')! 
      })
    }
  });

  return response;
}