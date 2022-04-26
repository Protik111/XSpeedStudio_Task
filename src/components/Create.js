import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './Navbar';

const Create = () => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        axios.get('http://localhost/api/get_form.php')
            .then(result => {
                setFormData(result.data.data.fields[0])
            })
    }, [])

    //if I want to add a value property in the object
    // const transformObj = (obj) => {
    //     return Object.keys(obj).reduce((acc, cur) => {
    //         acc[cur] = {
    //             ...obj[cur],
    //             value: ''
    //         }
    //         return acc;
    //     }, {})
    // }

    const mapObjectToArr = (obj) => {
        return Object.keys(obj).map((key) => ({ name: key, ...obj[key] }))
    }

    const formValues = mapObjectToArr(formData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: {
                ...formData[e.target.name],
                value: e.target.value
            }
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const values = Object.keys(formData).reduce((acc, cur) => {
            acc[cur] = formData[cur].value;
            return acc;
        }, {})
        console.log(values);
    };

    if (formData.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <form onSubmit={handleSubmit}>
                    {formValues.map((item, index) => (
                        <div className="mb-3" key={index}>
                            <label className="form-label text-capitalize">
                                {item.title}
                            </label>
                            <input
                                type={item.type}
                                className="form-control"
                                name={item.name}
                                default={!item.default ? '' : item.default}
                                required={item.required}
                                onChange={handleChange}
                                value={item.value}
                            />
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default Create;