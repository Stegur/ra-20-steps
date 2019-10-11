import React, { useState } from 'react'
import './steps.css'
import Form from '../form/Form'
import Results from '../results/Results'
import WalkModel from '../../Models/WalkModel';

function Steps(props) {

    const [results, setResults] = useState([new WalkModel('22.10.2019', 1), new WalkModel('2.10.2019', 11), new WalkModel('23.10.2018', 3) ]);

    const handleAdd = (walk) => {

        const compareFn = (a, b) => {

            const [aDay, aMonth, aYear] = a.date.split('.');
            const [bDay, bMonth, bYear] = b.date.split('.');

            const aDate = new Date(aYear, aMonth - 1, aDay);
            const bDate = new Date(bYear, bMonth - 1, bDay);

            return aDate < bDate ? 1 : -1
        }

        setResults(prev => {
            const index = prev.findIndex(o => o.date === walk.date);
            if (index === -1) {
                return [...prev, walk].sort(compareFn);
            }

            return prev.map(o => o.date === walk.date ? { ...o, distance: o.distance + Number.parseFloat(walk.distance) } : o);
        });

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

