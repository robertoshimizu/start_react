# First React App

Going through this course: https://react-v8.holt.courses/lessons/no-frills-react/pure-react

starter: First commit

## Understand .jsx files

In a javascript way, you would import library react and write the follwoing javascript codes.
Here you write the Pet component.

```javascript
import React from 'react'

const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ])
}

export default Pet
```

Here you import the above Pet component, and use it to compose a `App` script, which is them injected in the `index.html` at the element with the `id="root"` element.

```javascript
import React from 'react'
import { createRoot } from 'react-dom/client'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna',
      animal: 'Dog',
      breed: 'Havanese'
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Cockatiel'
    }),
    React.createElement(Pet, {
      name: 'Doink',
      animal: 'Cat',
      breed: 'Mix'
    })
  ])
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(React.createElement(App))
```

Below you can see where the javascript code is injected in the `html` file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Adopt Me</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script type="module" src="./App.js"></script>
  </body>
</html>
```

The `.jsx` files as opposed to a traditional `.js`, uses syntatic sugar to simplify the code. For that, it uses the `React` library under the hood. Please notice below how the code changes as a consequence:

```javascript
// Notice that Pet is in fact a function that returns a component.
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  )
}

export default Pet
```

Notice that you no longer has to declare the `import React from "react";` and use it to `create element`, you can write it as you would write a `html` file.

In addition, as you can see below, when you import the component `Pet` you can inject it using `<Pet />` along with the `props` fields. (like in Vue or Svelte)

```javascript
// rename the file App.jsx
// delete the React import
import { createRoot } from 'react-dom/client'
import Pet from './Pet'

// delete the Pet component

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
```

The reference to module of the script is changed to `App.jsx`.
`html` file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Adopt Me</title>
  </head>

  <body>
    <div id="root">not rendered</div>
    <script type="module" src="./App.jsx"></script>
  </body>
</html>
```

### Function Components

Function Components:

- These were simply JavaScript functions that return JSX.
- Historically, they were stateless, meaning they didn't manage their own state. They received data through props and rendered it.
- With the introduction of Hooks, function components can now manage state, handle side effects, and access many of the features that were previously exclusive to class components.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

OR
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>
}
```

### Hooks

Functions starting with use are called Hooks. These special type of function lets you "hook into" React features from function components. `useState` is a built-in Hook provided by React. You can find other built-in Hooks in the API reference. You can also write your own Hooks by combining the existing ones.

#### `useState`

Hooks are more restrictive than other functions. You can only call Hooks at the top of your components (or other Hooks). If you want to use `useState` in a condition or a loop, extract a new component and put it there.

```javascript
import { useState } from 'react'

const SearchParams = () => {
  // replace location
  const [location, updateLocation] = useState('')
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams
```

- You’ll get two things from `useState`: the current state (location), and the function that lets you update it (updateLocation). You can give them any names, but the convention is to write [something, setSomething].
- The first time the location is displayed, location will be "" because you passed "" to `useState()`. When you want to change location, call `updateLocation()` and pass the new value to it. By input a new location in the form, this event will trigger `updateLocation` with the new value.
- The argument given to `useState` is the default value. In our case, we could give it "Seattle, WA" as our default value but let's give it a default empty string value.
- `useState` returns to us an array with two things in it: the current value of that state and a function to update that state. We're using a feature of JavaScript called destructuring to get both of those things out of the array.
- We use the `updateLocation` function in the `onChange` attribute of the input. Every time the input is typed into, it's going to call that function which calls `updateLocation` with what has been typed into the input. When `updateLocation` is called, React knows that its state has been modified and kicks off a re-render.
- You can make your own custom hooks; `useState` is just one of many.

#### `useEffect`

We want the app to request an initial set of pets on initial load of the page. So let's make that happen using a special hook called `useEffect`. `useEffect` allows you to say do a render of this component first so the user can see something then as soon as the render is done, then do something (the something here being an effect). In our case, we want the user to see our UI first then we want to make a request to the API so we can initialize a list of pets.

```javascript
useEffect(() => {
  requestPets()
}, [])
```

It is important to leave `[]` at end to say to run once. The it will run when form is submitted.

This first time, it will get all animals and breed

Reference: https://react.dev/learn/thinking-in-react

For selecting the breed according to the selected animal, we built a "custom hook" called `useBreedList`

```javascript
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([])
  const [status, setStatus] = useState('unloaded')

  useEffect(() => {
    if (!animal) {
      setBreedList([])
    } else if (localCache[animal]) {
      setBreedList(localCache[animal])
    } else {
      requestBreedList()
    }

    async function requestBreedList() {
      setBreedList([])
      setStatus('loading')
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      )
      const json = await res.json()
      localCache[animal] = json.breeds || []
      setBreedList(localCache[animal])
      setStatus('loaded')
    }
  }, [animal])

  return [breedList, status]
}
```

Notice that this `hook` is gonna run when `animal` changes

### `<StrictMode>`

`<StrictMode>` lets you find common bugs in your components early during development.

https://react.dev/reference/react/StrictMode

### Images in React, using Vite

The way Vite is configured in this project, the public folder needs to be inside the `src` folder.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: 'src'
})
```

The image needs to stay inside the public folder.

```html
<img src="images/pizza.jpg" alt="pizza" />
```

To be checked how to leave the public folder out of `src` folder and access the images.

### Conditional Rendering in React

1.With `&&`:

```javascript
{
  isOpen && (
    <div className="order">
      <p>We're open until {closeHour}:00. Come to visit us or order online.</p>
      <button className="btn">order</button>
    </div>
  )
}
```

2. Ternary operator

```javascript
<footer className="footer">
  {isOpen ? (
    <div className="order">
      <p>We're open until {closeHour}:00. Come to visit us or order online.</p>
      <button className="btn">order</button>
    </div>
  ) : (
    <p>
      We're happy to welcome you between {openHour}:00 and {closeHour}:00.
    </p>
  )}
</footer>
```

3. Multiple Returns

```javascript
if (isOpen)
  return (
    <footer className="footer">
      <div className="order">
        <p>
          We're open until {closeHour}:00. Come to visit us or order online.
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
```

#### Fragments

Necessary when returning multiple elements

```javascript
return (
  <main className="menu">
    <h2>Our menu</h2>
    {num_pizzas > 0 ? (
      <>
        <p>
          Authentic italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </>
    ) : (
      <p>We're still working on the menu. Please come back later :)</p>
    )}
  </main>
)
```

### Set Text and Classes conditionally

```javascript
<li className={`pizza ${props.pizzaObj.soldOut && 'sold-out'}`}>
  <img src={props.pizzaObj.photoName} alt={props.name} />
  <div>
    <h3>{props.pizzaObj.name}</h3>
    <p>{props.pizzaObj.ingredients}</p>
    <span>{props.pizzaObj.soldOut ? 'SOLD OUT' : props.pizzaObj.price}</span>
  </div>
</li>
```

## Adding emojis

- windows: win key + `.` (period)
- mac: Ctrl + Command + spacebar

## Accessibility

```javascript
<select
    disabled={!breeds.length}
    id="breed"
    value={breed}
    onChange={(e) => setBreed(e.target.value)}
    onBlur={(e) => setBreed(e.target.value)}
>
```

`onChange` gets triggered when an element changes, for example, when the value of an input box changes. `onBlur` gets triggered when an object goes out of focus; for example, when you have the cursor in one input box and the cursor goes to another input box, the onblur event of the first input box will get triggered.
