import PetList from "../Dashboard/PetList/PetList.js";
import * as petService from '../../services/petService.js';
import { useAuthContext } from '../../contexts/AuthContext.js'
import { useEffect, useState } from "react";

export default function MyPets(){
    let [pets, setPets] = useState([]);
    const {user} = useAuthContext(); 

    useEffect(() => {
        petService.getMyPets(user._id)
        .then(petResult => {
            setPets(petResult);
        })
    },[])
    return(
        <section id="my-pets-page" className="my-pets">
                <h1>My Pets</h1>
                
                <PetList pets={pets}/>
                
            </section>
    );
}