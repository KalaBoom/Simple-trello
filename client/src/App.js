import React, {useState, useEffect, useCallback} from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Home from './MainBoard/MainBoard'  
import Context from './Context'
import Board from './ActiveBoard/Board'
import useSendData from './hooks/sendData.hook'
import useGetData from './hooks/getData.hook'
import './App.scss'

function App() {
  const [boards, setBoards] = useState([])
  const {sendData, loading} = useSendData()
  const {getData} = useGetData()

  const getBoards =  useCallback(async () => {
    const data = await getData('all')
    setBoards(data)
  })

  useEffect(() => {
    getBoards()
  }, [])

  async function createBoard(title) {
      try {
        await sendData(`/create/board/${title}`)
        return Promise.resolve()
      } catch(e) {
        return Promise.reject()
      } finally {
        getBoards()
      }
  }

  return (
      <Router>
        <Switch>
          {boards.map((board,index) => {
            return <Route exact path={board.href} key={index}>
                      <Board title={board.title} id={board._id}/>
                  </Route>
          })}
        <Route exact path='/'>
          <Context.Provider value={{boards, createBoard, loading}}>
            <Home/>
          </Context.Provider>
          </Route>
        </Switch>
    </Router>
  )
}

export default App;
