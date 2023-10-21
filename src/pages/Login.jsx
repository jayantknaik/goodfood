import { useFormik } from "formik";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
        <form className="login" onSubmit={formik.handleSubmit}>
            <div className="login__input-container">
                <label className="login__label" htmlFor="name">Name:</label>
                <input className="login__input" type="text" name="name" id="name" onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div className="login__input-container">
                <label className="login__label" htmlFor="email">Email:</label>
                <input className="login__input" type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} />
            </div>
            <button className="login__cta" type="submit">Submit</button>
        </form>
    )
}

export default Login;