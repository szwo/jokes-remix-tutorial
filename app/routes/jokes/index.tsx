import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

// Style Urls
import stylesUrl from '~/styles/index.css';

export const links: LinksFunction = () => {
    return [
        {
            rel: 'stylesheet',
            href: stylesUrl
        }
    ];
};

const JokesIndex = () => {
    return (
        <div className="container">
        <div className="content">
          <h1>
            Remix <span>Jokes!</span>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="jokes">Read Jokes</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )    
};

export default JokesIndex;