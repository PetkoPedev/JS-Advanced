import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as petService from '../../services/petService';
import { useAuthContext } from "../../contexts/AuthContext.js";
import ConfirmDialogue from '../Common/ConfirmDialogue/ConfirmDialogue.js'
import { Button } from "react-bootstrap";
import usePetState from "../../hooks/usePetState.js";

export default function Details() {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    let { petId } = useParams();
    const [pet, setPet] = usePetState(petId);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    

    const deleteHandler = (e) => {
        e.preventDefault();

        petService.remove(petId, user.accessToken)
            .then(() => {
                navigate('/dashboard');
            })
            .finally(() => {
                setShowDeleteDialog(false);
            });
    };

    const deleteClickHandler = (e) => {
        e.preventDefault();
        setShowDeleteDialog(true);
    }

    const ownerButtons = (
        <>
            <Link className="button" to={`/edit/${pet._id}`}>Edit</Link>
            <a className="button" onClick={deleteClickHandler}>Delete</a>
        </>
    );

    const likeButtonClick = () => {
        if(pet.likes.includes(user._id)){
            console.log('User already liked');
            return;
        }

        let likes = [...pet.likes, user._id];
        let likedPet = {...pet, likes};

        petService.like(pet._id, likedPet, user.accessToken)
        .then((resData) => {
            console.log(resData);
            setPet(state => ({
                ...state,
                likes
            }))
        })
    }

    const guestButtons = (<Button onClick={likeButtonClick}>Like</Button>);

    return (
        <>
        <ConfirmDialogue show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} onSave={deleteHandler}/>
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
                            <span id="total-likes">Likes: {pet.likes?.length}</span>
                        </div>

                    </div>
                </div>
                <div className="pet-description">
                    <h3>Description:</h3>
                    <p>{pet.description}</p>
                </div>
            </section>
        </>
    );
}