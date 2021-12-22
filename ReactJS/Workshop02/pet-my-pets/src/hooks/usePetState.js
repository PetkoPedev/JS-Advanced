import { useState, useEffect, useMemo } from 'react';
import * as petService from '../services/petService.js'

const usePetState = (petId) => {
    const [pet, setPet] = useState({});

    const controller = useMemo(() => {
        let controller = new AbortController();

        return controller;
    }, [])

    useEffect(() => {
        petService.getOne(petId, controller.signal)
            .then(petResult => {
                setPet(petResult);
            })
        return () => {
            controller.abort();
        }
    }, [petId]);

    return [
        pet,
        setPet
    ]
};

export default usePetState;