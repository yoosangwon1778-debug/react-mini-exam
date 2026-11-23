
import './App.css'
import AddMenu from './Components/AddMenu'
import Header from './Components/Header'
import MenuCard from './Components/MenuCard'
import { initialMenus } from './data'
import { useState } from 'react'
function App() {

  const [menus, setMenus]=useState(initialMenus)

  const handleVote = (id) => {
    setMenus(menus.map((m) =>
      m.id === id ? { ...m, votes: m.votes + 1 } : m
    ))
  }

  const addMenu = (name) => {
    setMenus([...menus,{
      id:Date.now(),
      emoji:'🍽️',
      name:name,
      votes:0
    }])
  }

  const resetVotes = () => {
    setMenus(menus.map((m) => ({ ...m, votes: 0 })))
  }

  const totalVotes = menus.reduce((sum, m) => sum + m.votes, 0)
  const maxVotes = Math.max(...menus.map((m) => m.votes))

  return (
    <div className='app'>
      <Header title={'🍱 오늘 점심 뭐 먹지?'} total={totalVotes} />
      <AddMenu onAdd={addMenu}/>
      <ul className='menus'>
        {menus.map((m)=>(
          <MenuCard key={m.id} {...m} onVote={handleVote} isTop={maxVotes > 0 && m.votes === maxVotes}/>
        ))}
      </ul>

      <footer className='footer'>
        <button className='reset' onClick={resetVotes}>투표 초기화</button>
      </footer>
    </div>
  )
}

export default App
