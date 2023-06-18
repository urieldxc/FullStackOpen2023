import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', phone: '040-123456' },
    { name: 'Ada Lovelace', phone: '39-44-5323523' },
    { name: 'Dan Abramov', phone: '12-43-234345' },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' }])

    const [newPerson, setNewPerson] = useState('');
    const [newPhone, setNewPhone] = useState('');
    const [search, setSearch] = useState('')


    const addPerson = (e) => {
        e.preventDefault()
        if (persons.some(person => person.name === newPerson)) {
            alert("REPE")
            return;
        }

        const newPersonObject = {
            name: newPerson,
            phone: newPhone
        }


        setPersons((prevPersons) => [...prevPersons, newPersonObject])
        setNewPerson('')
        setNewPhone('')

    }

    const handlePersonChange = (event) => {
        setNewPerson(event.target.value)
    }

    const handlePhoneChange = (event) => {
        setNewPhone(event.target.value)
    }

    const handleSearchChange = (event) => {
        const searchTerm = event.target.value
        setSearch(searchTerm)
    }

    const filteredPersons = persons.filter((person) =>
        person.phone.includes(search)
    );

    return (
        <div>
            <h2>Filter</h2>
            <form>
                search: <input value={search} onChange={handleSearchChange}></input>
            </form>
            <h2>Phonebook</h2>

            <form onSubmit={addPerson}>
                <div>
                    name: <input value={newPerson} onChange={handlePersonChange} />
                </div>
                <div>
                    phone: <input value={newPhone} onChange={handlePhoneChange} />
                </div>

                <div>
                    <button type="submit">add</button>
                </div>
            </form>


            <h2>Numbers</h2>
            {filteredPersons.map((el, index) => (
                <p key={index}>
                    {el.name}: {el.phone}
                </p>
            ))}
        </div>
    )
}

export default App