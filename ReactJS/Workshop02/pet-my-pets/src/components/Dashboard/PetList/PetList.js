import PetCard from '../PetCard/PetCard';
import { useEffect, useState } from "react";

export default function PetList({
    pets
}) {
    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(x => <PetCard key={x._id} pet={x} />)}
                    </ul>
                ) 
                : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
}