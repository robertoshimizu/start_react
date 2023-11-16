import { createRoot } from 'react-dom/client'
// delete Pet import, and add SearchParams
import Fixie from './Fixie'

const App = () => {
  return (
    <div>
      {/* in App.jsx, replace all the Pets */}
      <Fixie />;
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
