import { useParams } from 'react-router-dom';
import * as petService from '../../services/petService.js';
import usePetState from '../../hooks/usePetState.js';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';

const types = [
    {value: 'cat', text: 'Cat'},
    {value: 'dog', text: 'Dog'},
    {value: 'parrot', text: 'Parrot'},
    {value: 'reptile', text: 'Reptile'},
    {value: 'other', text: 'Other'}
]

export default function EditPage() {
    const { petId } = useParams();
    const[pet] = usePetState(petId);
    const [errors, setErrors] = useState({errorName: false});
    
    const petEditSubmitHandler = (e) => {
        e.preventDEfault();
    }

    const onNameChangeHandler = (e) => {
        let currentName = e.target.value;
        if(currentName.length < 3 || currentName.length >= 10){
            setErrors(state => ({...state, errorName: 'Your name should be at least 3 characters or maximum 10.'}));
        } else {
            setErrors(state => ({...state, errorName: false}));
        }
    }
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" method="POST" onSubmit={petEditSubmitHandler}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input" style={{borderColor: errors.errorName ? 'red' : 'inherit'}}>
                            <input type="text" name="name" id="name" defaultValue={pet.name} onChange={onNameChangeHandler} />
                        </span>
                        <Alert variant="danger" show={errors.errorName}>{errors.errorName}</Alert>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={pet.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl} />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" >
                                {types.map(x => <option key={x.value} selected={pet.type == x.value}>{x.text}</option>)}
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
}