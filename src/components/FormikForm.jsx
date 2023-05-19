import { useFormik } from "formik"
import { useState } from "react"
import * as Yup from 'yup'

export const FormikForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        mobile: ""
    })

    function onSubmit (values) {
        alert(JSON.stringify(values))
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is requred here"),
        address: Yup.string().required("Address is required here"),
        email: Yup.string().email().required(),
        mobile: Yup.number().max(10).required().typeError("Only numbers are allowed")
    })

    const formik = useFormik({
        initialValues: formData,
        onSubmit,
        validationSchema,
        enableReinitialize: true
    })
    const arr = ["Apple", "Banana", "Mango"]

    return (
        <>
        {arr.map((item) => item)}
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    /><br/>
                    {formik.errors.name && formik.touched.name && <small>{formik.errors.name}</small>}
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input
                    type="text"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    /><br/>
                    {formik.errors.address && formik.touched.address && <small>{formik.errors.address}</small>}
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    /><br/>
                    {formik.errors.email && formik.touched.email && <small>{formik.errors.email}</small>}
                </div>
                <div>
                    <label htmlFor="name">Mobile Number</label>
                    <input
                    type="text"
                    name="mobile"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    /><br/>
                    {formik.errors.mobile && formik.touched.mobile && <small>{formik.errors.mobile}</small>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}