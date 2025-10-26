// Comments API disabled - no auth system
export const GET = () => new Response('Comments disabled', { status: 503 });
export const POST = () => new Response('Comments disabled', { status: 503 });
export const PATCH = () => new Response('Comments disabled', { status: 503 });
export const DELETE = () => new Response('Comments disabled', { status: 503 });
