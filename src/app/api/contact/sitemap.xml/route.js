// src/app/api/sitemap.xml/route.js

export async function GET() {
  const baseUrl = "https://charlestanev.dev";
  const staticRoutes = ["", "/about", "/projects", "/contact"]; // Add your static routes here

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes
      .map(
        (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>
`)
      .join("")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
