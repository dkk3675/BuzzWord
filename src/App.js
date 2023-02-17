import { useEffect, useState } from 'react'
import BuzzWord from './components/BuzzWord'
import { solutions } from './data/db';

function App() {
  const [solution, setSolution] = useState(null)
  
  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random()*solutions.length)]
    setSolution(randomSolution.word)
  }, [setSolution])

  return (
    <div className="App">
      <h1>BuzzWord</h1>
      {solution && <BuzzWord solution={solution} />}
    </div>
  )
}

export default App