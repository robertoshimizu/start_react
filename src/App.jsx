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
    const pizzas = pizzaData
    // const pizzas = []
    const num_pizzas = pizzas.length

    return (
        <main className="menu">
            <h2>Our menu</h2>
            {num_pizzas > 0 ? (
                <>
                    <p>
                        Authentic italian cuisine. 6 creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzaData.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on the menu. Please come back later :)
                </p>
            )}
        </main>
    )
}

const Footer = () => {
    const hour = new Date().getHours()
    const openHour = 12
    const closeHour = 22
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen)

    if (isOpen)
        return (
            <footer className="footer">
                <div className="order">
                    <p>
                        We're open until {closeHour}:00. Come to visit us or
                        order online.
                    </p>
                    <button className="btn">order</button>
                </div>
            </footer>
        )
    else
        return (
            <p>
                We're happy to welcome you between {openHour}:00 and {closeHour}
                :00.
            </p>
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
