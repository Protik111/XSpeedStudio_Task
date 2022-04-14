import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from "@mui/system";
import LinearProgress from '@mui/material/LinearProgress';

const Create = () => {
    const [formData, setFormData] = useState({});
    const [state, setState] = useState({});

    useEffect(() => {
        axios.get('http://localhost/api/get_form.php')
            .then(result => {
                setFormData(result.data.data.fields[0])
                Object.keys(formData).map((resp) => setState(state => ({ ...state, [resp.fieldName]: resp.value })));
                return () => { };
            })
    }, [])

    const handleChange = (e, field) => {
        setState({
            ...state,
            [field]: e.target.value //edit
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    if (formData.length <= 0) {
        return (
            <Box mt={20} sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }

    console.log('formData', formData, typeof(formData));

    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map((key, index) => (
                    <div className="mb-3" key={index}>
                        <label className="form-label text-capitalize">
                            {formData[key].title}
                            {console.log('label', formData[key])}
                        </label>
                        <input
                            type={key.type}
                            className="form-control"
                            required
                            onChange={(e) => {
                                handleChange(e, key.fieldName);
                            }}
                            value={state[key.fieldName]}
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;