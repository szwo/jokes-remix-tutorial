import { Outlet } from "@remix-run/react";

const JokesRoute = () => {
    return (
        <>
            <h1>Jokes Route</h1>
            <Outlet />
        </>
    );
};

export default JokesRoute;