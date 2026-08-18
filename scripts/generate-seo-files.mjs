import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const distDirectory = path.join(root, "dist");
const baseHtml = await readFile(path.join(distDirectory, "index.html"), "utf8");

const routes = [
  { path: "/", title: "Mobile Phone fix Dubai | Azan Mobile Fix", description: "Mobile phone, iPhone, Samsung, tablet and laptop fix services across Dubai from Azan Mobile Fix in Bur Dubai." },
  { path: "/services", title: "Phone, Tablet and Laptop Fix Dubai | Azan Mobile Fix", description: "Explore iPhone, Samsung, mobile phone, iPad, tablet, MacBook and laptop fix services from Azan Mobile Fix in Bur Dubai." },
  { path: "/services/iphone-fix-dubai", title: "iPhone Fix in Dubai | Azan Mobile Fix", description: "iPhone screen, battery, charging and fault diagnosis in Dubai. Visit Azan Mobile Fix in Bur Dubai or ask about a doorstep appointment." },
  { path: "/services/samsung-phone-fix-dubai", title: "Samsung Phone Fix in Dubai | Azan Mobile Fix", description: "Samsung Galaxy screen, battery, charging and camera fix inquiries in Dubai. Get an assessment from our mobile fix shop in Bur Dubai." },
  { path: "/services/mobile-phone-fix-bur-dubai", title: "Mobile Phone Fix Shop in Bur Dubai | Azan Mobile Fix", description: "Looking for a mobile fix shop near you in Bur Dubai? Visit Azan Mobile Fix in Meena Bazaar for phone diagnostics and fix inquiries." },
  { path: "/services/ipad-tablet-fix-dubai", title: "iPad and Tablet Fix in Dubai | Azan Mobile Fix", description: "iPad and Android tablet screen, charging and battery fix inquiries in Dubai. Ask Azan Mobile Fix about assessment and availability." },
  { path: "/services/macbook-laptop-fix-dubai", title: "MacBook and Laptop Fix in Dubai | Azan Mobile Fix", description: "MacBook and Windows laptop diagnostics in Dubai for charging, keyboard, storage and other hardware faults. Visit our Bur Dubai shop." },
  { path: "/blog", title: "Phone Fix Guides and Device Care Tips | Azan Mobile Fix", description: "Read practical guides about cracked screens, battery symptoms, charging problems and choosing a mobile fix shop in Dubai." },
  { path: "/blog/what-to-do-after-phone-screen-cracks", title: "What to Do After Your Phone Screen Cracks | Azan Mobile Fix", description: "A practical checklist for protecting your phone, data and fingers after a cracked screen, plus signs that the device needs prompt inspection.", type: "article", published: "2026-08-03", modified: "2026-08-03" },
  { path: "/blog/iphone-battery-replacement-signs", title: "Signs Your iPhone Battery May Need Replacement | Azan Mobile Fix", description: "Learn the common signs of iPhone battery ageing, what else can cause rapid drain and when to arrange a safe battery assessment in Dubai.", type: "article", published: "2026-08-03", modified: "2026-08-03" },
  { path: "/blog/phone-not-charging-causes", title: "Why Is My Phone Not Charging? Safe Checks to Try | Azan Mobile Fix", description: "Safe checks for a phone that will not charge, including cables, adapters, ports, moisture warnings and signs that require fix diagnosis.", type: "article", published: "2026-08-03", modified: "2026-08-03" },
  { path: "/blog/choose-mobile-fix-shop-dubai", title: "How to Choose a Mobile Fix Shop in Dubai | Azan Mobile Fix", description: "A practical checklist for comparing mobile fix shops in Dubai: business identity, diagnosis, quotation, parts, privacy and warranty.", type: "article", published: "2026-08-03", modified: "2026-08-03" },
  { path: "/locations", title: "Mobile Fix Shop in Meena Bazaar, Bur Dubai | Azan Mobile Fix", description: "Visit the single Azan Mobile Fix shop on 25C Street in Meena Bazaar, Bur Dubai. View the address, nearby landmarks and opening hours." },
  { path: "/about", title: "About Our Mobile Fix Shop in Bur Dubai | Azan Mobile Fix", description: "Learn about Azan Mobile Fix, our single Meena Bazaar shop and our mobile device fix services in Dubai." },
  { path: "/contact", title: "Contact Our Mobile Fix Shop in Bur Dubai | Azan Mobile Fix", description: "Contact Azan Mobile Fix or visit our mobile fix shop on 25C Street in Meena Bazaar, Bur Dubai." },
  { path: "/warranty", title: "Fix Warranty Policy | Azan Mobile Fix", description: "Read the fix warranty terms, coverage conditions, exclusions and claim process for services provided by Azan Mobile Fix." },
  { path: "/terms", title: "Terms of Service | Azan Mobile Fix", description: "Review the fix service terms, estimates, payment conditions and customer responsibilities for Azan Mobile Fix in Dubai." },
  { path: "/privacy", title: "Privacy Policy | Azan Mobile Fix", description: "Learn how Azan Mobile Fix collects, uses and protects information submitted through its Dubai business website and contact form." },
];

async function readEnvironment() {
  const values = {};
  for (const filename of [".env", ".env.local", ".env.production", ".env.production.local"]) {
    try {
      const content = await readFile(path.join(root, filename), "utf8");
      for (const line of content.split(/\r?\n/)) {
        const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
        if (!match) continue;
        values[match[1]] = match[2].replace(/^(['"])(.*)\1$/, "$2");
      }
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
  }
  return { ...values, ...process.env };
}

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function replaceMeta(html, route, siteUrl) {
  const title = escapeHtml(route.title);
  const description = escapeHtml(route.description);
  let output = html
    .replace(/<title>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:type" content="[^"]*"\s*\/>/, `<meta property="og:type" content="${route.type || "website"}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${description}" />`);

  const extra = [];
  if (siteUrl) {
    const canonical = `${siteUrl}${route.path === "/" ? "/" : route.path}`;
    output = output
      .replace(/<meta property="og:image" content="[^"]*"\s*\/>/, `<meta property="og:image" content="${escapeHtml(`${siteUrl}/og-image.png`)}" />`)
      .replace(/<meta name="twitter:image" content="[^"]*"\s*\/>/, `<meta name="twitter:image" content="${escapeHtml(`${siteUrl}/og-image.png`)}" />`);
    extra.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
    extra.push(`<meta property="og:url" content="${escapeHtml(canonical)}" />`);
  }
  if (route.type === "article") {
    extra.push(`<meta property="article:published_time" content="${route.published}" />`);
    extra.push(`<meta property="article:modified_time" content="${route.modified}" />`);
  }
  if (extra.length) output = output.replace("</head>", `    ${extra.join("\n    ")}\n  </head>`);
  return output;
}

const environment = await readEnvironment();
const configuredSiteUrl = (environment.VITE_SITE_URL || "").trim().replace(/\/$/, "");
const siteUrl = /^https:\/\//i.test(configuredSiteUrl) && !/YOUR-DOMAIN|localhost/i.test(configuredSiteUrl)
  ? configuredSiteUrl
  : "";

for (const route of routes) {
  const html = replaceMeta(baseHtml, route, siteUrl);
  if (route.path === "/") {
    await writeFile(path.join(distDirectory, "index.html"), html);
    continue;
  }
  const routeDirectory = path.join(distDirectory, ...route.path.slice(1).split("/"));
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, "index.html"), html);
}

const baseRobots = "User-agent: *\nAllow: /\nDisallow: /admin\n";
if (siteUrl) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url>\n    <loc>${escapeHtml(`${siteUrl}${route.path === "/" ? "/" : route.path}`)}</loc>\n    <lastmod>${route.modified || "2026-08-03"}</lastmod>\n  </url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(distDirectory, "sitemap.xml"), sitemap);
  await writeFile(path.join(distDirectory, "robots.txt"), `${baseRobots}Sitemap: ${siteUrl}/sitemap.xml\n`);
  console.log(`Generated static metadata and sitemap for ${routes.length} indexable routes.`);
} else {
  await rm(path.join(distDirectory, "sitemap.xml"), { force: true });
  await writeFile(path.join(distDirectory, "robots.txt"), baseRobots);
  console.warn("Generated route metadata without a sitemap. Set VITE_SITE_URL to the final HTTPS domain to enable canonical URLs and sitemap.xml.");
}
