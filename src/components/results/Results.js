import React from 'react'
import PropTypes from 'prop-types'
import './results.css'
import WalkModel from '../../Models/WalkModel';

function Results(props) {

    const {results, onDelete} = props;

    return (
        <div className="Results-container">
            <header className="Results-header">
                <span className="Results-date">Дата (ДД.ММ.ГГ)</span>
                <span className="Results-distance">Пройдено км</span>
                <span className="Results-actions">Действия</span>
            </header>
            <div className="Results-data">
                {results.map(item => (
                    <div className='Results-data-row' key={item.id}>
                        <span className="Results-data__date">{item.date}</span>
                        <span className="Results-data__distance">{item.distance}</span>
                        <span className="Results-data__actions">
                            <a href="#" className="Results-data__btn" ><span role='img' aria-label='Edit'>&#10000;</span></a>
                            <a href="#" id={item.id} className="Results-data__btn" onClick={() => onDelete(item.id)} ><span role='img' aria-label='Delete'>&#10060;</span></a>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

Results.propTypes = {
    results: PropTypes.arrayOf(PropTypes.instanceOf(WalkModel)).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Results

