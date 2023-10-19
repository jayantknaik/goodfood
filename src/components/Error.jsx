import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <main className="main">
            <h1>Error!!!</h1>
            <h2>{err.data}</h2>
        </main>
    )
}

export default Error;