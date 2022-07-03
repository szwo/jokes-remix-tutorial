import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Outlet } from "@remix-run/react";

// Style Urls
import globalStyleUrl from '~/styles/global.css';
import globalLgStyleUrl from '~/styles/global-large.css';
import globalMdStyleUrl from '~/styles/global-medium.css';

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStyleUrl
    },
    {
      rel: 'stylesheet',
      href: globalMdStyleUrl,
      media: "print, (min-width: 640px)"
    },
    {
      rel: 'stylesheet',
      href: globalLgStyleUrl,
      media: "screen and (min-width: 1024px)"
    },
  ]
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}