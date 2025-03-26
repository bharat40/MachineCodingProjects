import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
  const [progress, setProgress] = useState(0);
  if (progress != 100) {
    setTimeout(() => {
      setProgress(progress + 1);
    }, 100)
  }
  // if (progress == 100) {
  //   return <span>Completed ✨</span>
  // }
  return (
    <div>
      <h1>Progress Bar</h1>
      <ProgressBar progress={progress} />
    </div>
  )
}

export default App
