import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/') {
        const city = req.geo?.city || 'San Francisco';
        const lat = req.geo?.latitude || '37.7749';
        const long = req.geo?.longitude || '-122.4194';
        const region = req.geo?.region || 'CA';

        return NextResponse.redirect(`/${lat},${long}`);
    }
}