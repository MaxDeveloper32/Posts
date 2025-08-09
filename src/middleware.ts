// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('accessToken')?.value
     console.log(request.cookies);
     
   if (!accessToken) {
    // Перенаправляем на /login, если токена нет
    return NextResponse.redirect(new URL('/user-auth', request.url));
  }


  // Добавляем заголовок для проверки в браузере
  const response = NextResponse.next()
  
  
  return response
}

export const config = {
  matcher: ['/contacts',], // Защищенные пути
};