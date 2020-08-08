import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import { Form } from 'react-bootstrap';

const UploadForm = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);


    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select image file')
        }
    }

    return (
        // <form>
        //     <label>
        //         <input type ="file" onChange = { changeHandler }/>
        //         <span>+</span>
        //     </label>
        //     <div className="output">
        //         { error && <div className="error">{error} </div> }
        //         { file && <div>{file.name}</div> }
        //         { file && <ProgressBar file ={file} setFile={setFile}/> }
        //     </div>
        // </form>
        <div className = "container">
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Add an image" onChange= { changeHandler } />
                </Form.Group>
                <div className="output">
                    { error && <div className="error">{error} </div> }
                    { file && <div>{file.name}</div> }
                    { file && <ProgressBar file ={file} setFile={setFile}/> }
                </div>
            </Form>
        </div>
    )
}

export default UploadForm
