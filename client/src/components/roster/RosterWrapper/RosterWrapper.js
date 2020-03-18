import React, { useState, useEffect } from 'react'
import './_RosterWrapper.scss'
import useStateValue from '../../../lib/hooks/useStateValue'

import SVG from '../../SVG/SVG'
import Footer from '../Footer'

const RosterWrapper = ({ ...props }) => {

    const [{ price, teamDetails }, dispatch] = useStateValue()

    const [roster, setRoster] = useState([{
        id: Date.now(),
        name: '',
        number: '',
        size: 'M',
    }])

    //This produces a warning...But does exactly what I want it to do? Is there some other way of doing this?
    //Including the "dependency" would create an infinite loop
    useEffect(() => {
        setRoster(teamDetails)
    }, [])

    useEffect(() => {
        dispatch({ type: "ROSTER_UPDATE", roster: roster })
    }, [dispatch, roster])

    const handleNameChange = (e) => {
        const index = roster.findIndex(elem => elem.id === Number(e.target.dataset.id))
        const updatedObj = { ...roster[index], name: e.target.value }
        const updatedRoster = [
            ...roster.slice(0, index),
            updatedObj,
            ...roster.slice(index + 1)
        ]

        setRoster(updatedRoster)
    }

    const handleNumberChange = (e) => {
        if (e.target.value.match("^[0-9]{0,2}$")) {
            const index = roster.findIndex(elem => elem.id === Number(e.target.dataset.id))
            const updatedObj = { ...roster[index], number: e.target.value }
            const updatedRoster = [
                ...roster.slice(0, index),
                updatedObj,
                ...roster.slice(index + 1)
            ]

            setRoster(updatedRoster)
        }
    }

    const handleSizeChange = (e) => {
        const index = roster.findIndex(elem => elem.id === Number(e.target.id))
        const updatedObj = { ...roster[index], size: e.target.innerHTML }
        const updatedRoster = [
            ...roster.slice(0, index),
            updatedObj,
            ...roster.slice(index + 1)
        ]

        setRoster(updatedRoster)
    }

    const handleAdd = () => {
        let newRoster = roster.concat({
            id: Date.now(),
            name: '',
            number: '',
            size: 'M'
        })

        setRoster(newRoster)
    }

    const handleDelete = (e) => {
        if (teamDetails.length <= 1) { return setRoster(roster) }

        const newRoster = roster.filter(item => item.id !== Number(e.target.dataset.id))
        setRoster(newRoster)
    }

    return (
        <div className="container-roster">
            <h2 className="h2">Roster Builder</h2>
            <p>Give us your list of players so we know who to make jerseys for.</p>
            <button
                className="button-back"
                onClick={() => dispatch({ type: "STEP_CHANGE", step: 1 })}
            >
                {<SVG name="arrow-left" className="svg" />} Back to Design
                </button>
            <span
                className="price"
            >
                ${price * teamDetails.length}
            </span>
            <div className="container-player-list">
                {
                    roster.map((elem, index) => {
                        return <Player
                            key={index}
                            id={elem.id}
                            name={elem.name}
                            number={elem.number}
                            size={elem.size}
                            onNameChange={handleNameChange}
                            onNumberChange={handleNumberChange}
                            onSizeChange={handleSizeChange}
                            onDelete={handleDelete}
                        />
                    })
                }
                <hr />
                <button
                    className="add-button"
                    onClick={handleAdd}>
                    Add Player +
                </button>
            </div>
            <Footer currentRoster={roster} />
        </div>
    )
}

export default RosterWrapper

const Player = ({ id,
    name,
    size,
    number,
    onNameChange,
    onNumberChange,
    onSizeChange,
    onDelete }) => {

    useEffect(() => {
        document.querySelector(`#sizes-${id}`).childNodes.forEach(elem => elem.classList.remove("active"))
        const selectedSizeNode = Array.from(document.querySelector(`#sizes-${id}`).childNodes).filter(elem => elem.innerHTML === size)
        selectedSizeNode[0].classList.add("active")
    }, [size, id])

    return (
        <div id={id} className={`container-player player-${id}`}>
            <hr />
            <input
                data-id={id}
                className="last-name"
                onChange={onNameChange}
                value={name}
                placeholder={"Player's Last Name"}
            />
            <input
                data-id={id}
                className="number"
                onChange={onNumberChange}
                value={number}
                placeholder="#"
            />
            <div id={`sizes-${id}`}>
                {["XS", "S", "M", "L", "XL"].map(elem => <button key={elem} id={id} className="size-button" onClick={onSizeChange}>{elem}</button>)}
            </div>
            <button
                data-id={id}
                className="delete-button"
                onClick={onDelete}
            >
                Remove This Player
            </button>
        </div>
    )
}