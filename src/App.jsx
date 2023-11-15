import { useState } from 'react'

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
    { id: 2, description: 'Socks', quantity: 12, packed: true },
]

const App = () => {
    return (
        <div>
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    )
}

const Logo = () => <h1>🌴Far Away 💼</h1>

const Form = () => {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()
        if (!description) return

        const newItem = {
            description,
            quantity,
            isPacked: false,
            id: Date.now(),
        }
        console.log(newItem)

        setDescription('')
        setQuantity(1)
    }
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your 😍 trip?</h3>
            <select
                name=""
                id=""
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Add</button>
        </form>
    )
}

const PackingList = () => {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    )
}

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}

const Stats = () => (
    <footer className="stats">
        <em>You have X items in your list, and you already packed X (X%)</em>
    </footer>
)

export default App
