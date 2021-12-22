import { useEffect, useState } from 'react';
import PetList from './PetList/PetList';
import * as petService from '../../services/petService.js';

export default function Dashboard() {
    const [pets, setPets] = useState([]);
    
    useEffect(() => {
        petService.getAll()
            .then(result => {
                console.log(result);
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <section>
                <PetList pets={pets} />
            </section>

        </section>
    );
}