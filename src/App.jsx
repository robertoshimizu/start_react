import { useState } from 'react'

const initialItems = [
    { id: 1, description: 'Passports', quantity: 2, packed: false },
]

const App = () => {
    const [items, setItems] = useState(initialItems)
    return (
        <div>
            <Logo />
            <Form items={items} setItems={setItems} />
            <PackingList items={items} />
            <Stats />
        </div>
    )
}

const Logo = () => <h1>🌴Far Away 💼</h1>

const Form = ({ items, setItems }) => {
    const [description, setDescription] = useState('')
    const [quantity, setQuantity] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()
        if (!description) return

        const newItem = {
            id: items.length + 1,
            description,
            quantity: quantity,
            packed: false,
        }
        console.log([...items, newItem])

        // update the state
        setItems([...items, newItem])

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
                onChange={(e) => setQuantity(Number(e.target.value))}
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

const PackingList = ({ items }) => {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
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
