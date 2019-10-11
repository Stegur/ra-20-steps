import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './form.css'
import nanoid from 'nanoid'
import WalkModel from '../../Models/WalkModel';

function Form(props) {

    const { onAdd } = props;

    const [form, setForm] = useState({
        date: '',
        distance: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const dateValue = event.target.date.value;
        const distanceValue = event.target.distance.value;

        const walk = new WalkModel(dateValue, distanceValue)

        onAdd(walk);
        setForm({
            date: '',
            distance: ''
        })
    }

    const dateId = nanoid(3);
    const distanceId = nanoid(3);

    return (
        <form className="Form" action="#" onSubmit={handleSubmit}>
            <div className="Form__column">
                <label className="Form__lable" htmlFor={dateId}>Дата (ДД.ММ.ГГ)</label>
                <input className="Form__field" type="text" name="date" value={form.date} id={dateId} onChange={handleChange} />
            </div>
            <div className="Form__column">
                <label className="Form__lable" htmlFor={distanceId}>Пройдено км</label>
                <input className="Form__field" type="text" name="distance" value={form.distance} id={distanceId} onChange={handleChange} />
            </div>
            <div className="Form__column">
                <button className="Form__btn" type="submit">ОК</button>
            </div>
        </form>
    )
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default Form

