import React, { useState } from 'react'
import './steps.css'
import Form from '../form/Form'
import Results from '../results/Results'
import WalkModel from '../../Models/WalkModel';

function Steps(props) {

    const [results, setResults] = useState([new WalkModel('22.10.2019', 1), new WalkModel('23.10.2019', 3)]);

    const handleAdd = (walk) => {
        // results.map(result => {
        //     console.log(result)
        //     if (result.date === walk.date) {
        //         setResults(prevResults => [...prevResults, new WalkModel(
        //             result.date,
        //             parseFloat(result.distance) + parseFloat(walk.distance),
        //             result.id,
        //         )])
        //     } else {
        //         setResults(prevWalks => [...prevWalks, walk])
        //     }
        // })

        // setResults(prevResults => prevResults.map(result =>
        //     result.date === walk.date ? new WalkModel(result.date, parseFloat(result.distance) + parseFloat(walk.distance), result.id) : walk
        // ));
        // setResults(prevWalks => [...prevWalks, walk])

        // setResults(prevResults => prevResults.map(result =>
        //     result.date === walk.date ? result.distance = parseFloat(result.distance) + parseFloat(walk.distance) : setResults(prevWalks => [...prevWalks, walk])
        // ));


        // setResults(prevResults => prevResults.map(result => {
        //     if (result.date === walk.date) {
        //         return new WalkModel(result.date, parseFloat(result.distance) + parseFloat(walk.distance), result.id)
        //     } else {
        //         return result
        //     }
        // }
        // ));

        setResults(prev => prev.map(result => {
            if (result.date === walk.date) {
                const distance = result.distance + Number.parseFloat(walk.distance);
                return { ...result, distance };
            }
            return result;
        }));

    }

    const handleRemove = (id) => {
        setResults(prevWalks => prevWalks.filter(walk => walk.id !== id))
    }

    return (
        <>
            <Form onAdd={handleAdd} />
            <Results results={results} onDelete={handleRemove} />
        </>
    )
}

export default Steps

