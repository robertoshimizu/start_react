import { createRoot } from 'react-dom/client'
// delete Pet import, and add SearchParams
import SearchParams from './SearchParams'

const App = () => {
  return (
    <div>
      {/* in App.jsx, replace all the Pets */}
      <SearchParams />;
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
