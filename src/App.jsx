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
    return (
        <div className="add-form">
            <h3>What do you need for your trip?</h3>
        </div>
    )
}

const PackingList = () => <div className="list">LIST</div>

const Stats = () => (
    <footer className="stats">
        <em>You have X items in your list, and you already packed X (X%)</em>
    </footer>
)

export default App
