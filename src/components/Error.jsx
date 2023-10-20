import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();

    return (
        <main className="error">
            <div className="error__head">Error!!!</div>
            <div className="error__desc">{err.data}</div>
        </main>
    )
}

export default Error;