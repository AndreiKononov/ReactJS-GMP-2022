import { NextResponse } from 'next/server';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (pathname === '/') {
    const url = req.nextUrl.clone();
    url.pathname = '/search';

    return NextResponse.redirect(url);
  }

  if (pathname === '/shared-search') {
    const url = req.nextUrl.clone();
    url.pathname = '/search';

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
