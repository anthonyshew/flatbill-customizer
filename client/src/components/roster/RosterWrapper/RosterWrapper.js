import React, { useState, useEffect } from 'react'
import './_RosterWrapper.scss'

const RosterWrapper = ({ ...props }) => {

    const [roster, setRoster] = useState([{
        id: Date.now(),
        name: '',
        number: '',
        size: 'M',
    }])

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
        const newRoster = roster.filter(item => item.id !== Number(e.target.id))
        setRoster(newRoster)
    }

    return (
        <div className="container-roster">
            <h2 className="h2">Roster Builder</h2>
            <p>Give us your list of players so we know who to make jerseys for.</p>
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
                <button id={id} className="size-button" onClick={onSizeChange}>XS</button>
                <button id={id} className="size-button" onClick={onSizeChange}>S</button>
                <button id={id} className="size-button" onClick={onSizeChange}>M</button>
                <button id={id} className="size-button" onClick={onSizeChange}>L</button>
                <button id={id} className="size-button" onClick={onSizeChange}>XL</button>
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