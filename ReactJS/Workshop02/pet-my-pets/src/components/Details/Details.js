import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as petService from '../../services/petService';
import { AuthContext } from "../../contexts/AuthContext.js";

export default function Details() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [pet, setPet] = useState({});
    let { petId } = useParams();
    useEffect(() => {
        petService.getOne(petId)
        .then(petResult => {
            setPet(petResult);
        })
    }, [petId]);

    const deleteHandler = (e) => {
        e.preventDefault();

        petService.remove(petId, user.accessToken)
        .then(() => {
            navigate('/dashboard');
        });
    };

    const ownerButtons = (
        <>
            <Link className="button" to="edit">Edit</Link>
            <a className="button" onClick={deleteHandler}>Delete</a>
        </>
    );

    const guestButtons = (<a className="button" href="#">Like</a>);

    return (
        <section id="details-page" className="details">
            <div className="pet-information">
                <h3>Name: {pet.name}</h3>
                <p className="type">Type: {pet.type}</p>
                <p className="img"><img src={pet.imageUrl} /></p>
                <div className="actions">
                    {user._id && (user._id == pet._ownerId
                        ? ownerButtons
                        : guestButtons
                    )}

                    <div className="likes">
                        <img className="hearts" src="/images/heart.png" />
                        <span id="total-likes">Likes: {pet.likes}</span>
                    </div>

                </div>
            </div>
            <div className="pet-description">
                <h3>Description:</h3>
                <p>{pet.description}</p>
            </div>
        </section>
    );
}