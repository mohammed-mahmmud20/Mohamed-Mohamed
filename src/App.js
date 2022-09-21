import React , { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './component/Navbar'
import { SyncLoader } from 'react-spinners'

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])

  return (
      <div>
        {
          loading ? (
            <SyncLoader className='SyncLoader'/>
          ) : (
            <Navbar />
          )
        }
      </div>
  )
}

export default App