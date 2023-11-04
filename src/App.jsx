import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Pizza from './Pizza'
import pizzaData from './data'

const App = () => {
    return (
        <div className="container">
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

const Menu = () => {
    return (
        <main className="menu">
            <h2>Our menu</h2>
            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} key={pizza.name} />
                ))}
            </ul>
        </main>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            {new Date().toLocaleTimeString()}. We're currently open
        </footer>
    )
}

const Header = () => {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
