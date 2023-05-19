import { useState } from "react";

function Form () {

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        mobile: ""
    })
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const validateInput = () => {
        let errors = {};
        if(!formData.name) {
            errors.name = "Name is required";
        }
        if(!formData.address) {
            errors.address = "Address is required";
        }
        if(!formData.mobile) {
            errors.mobile = "Mobile number is required";
        }
        setErrors(errors)
        return errors;
    }

    const handleSubmit = () => {
        const errors = validateInput();
        if (Object.values(errors).length === 0)
            alert(JSON.stringify(formData))
    }

    return (
        <>
        <form
        onSubmit={(event) => {
            event.preventDefault();
            handleSubmit()
        }}
        >
            <div>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(event) => {
                    handleInputChange(event)
                }}
                /><br/>
                {errors.name && <small>{errors.name}</small>}
            </div>
            <div>
                <label htmlFor="address">Address</label>
                <input
                type="text"
                name="address"
                value={formData.address}
                onChange={(event) => {
                    handleInputChange(event)
                }}
                /><br/>
                {errors.address && <small>{errors.address}</small>}
            </div>
            <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={(event) => {
                    handleInputChange(event)
                }}
                /><br/>
                {errors.mobile && <small>{errors.mobile}</small>}
            </div>
            <button type="submit">Submit</button> <br/>
            <button
            type="button"
            onClick={() => {
                setFormData({
                    name: "",
                    address: "",
                    mobile: ""
                })
                setErrors({})
            }}
            >Reset Form</button>
        </form>
        </>
    )
}

export default Form;