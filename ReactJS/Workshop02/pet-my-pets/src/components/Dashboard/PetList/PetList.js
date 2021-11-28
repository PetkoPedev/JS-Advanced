import PetCard from '../PetCard/PetCard';
import { useEffect, useState } from "react";
import * as petService from '../../../services/petService';

export default function PetList() {
    const [pets, setPets] = useState([]);
    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            })
    }, []);
    return (
        <>
            {pets.length > 0
                ? (
                    <ul className="other-pets-list">
                        {pets.map(x => <PetCard key={x._id} pet={x} />)}
                    </ul>
                ) : <p className="no-pets">No pets in database!</p>
            }
        </>
    );
}