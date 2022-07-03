import type { LinksFunction } from "@remix-run/node";

import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
    return [
          {
            rel: "stylesheet",
            href: stylesUrl,
          },
    ];
};

const IndexRoute = () => {
    return (
        <h1>Index Route</h1>
    )
};

export default IndexRoute;