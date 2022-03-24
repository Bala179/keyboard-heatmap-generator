import React, {useState, useEffect} from 'react'
import { HeatMapGrid } from 'react-grid-heatmap'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
      fetch("/keylog").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
        }
      )
  }, [])

  const [status, setStatus] = useState("")

  useEffect(() => {
    fetch("/status").then(
      res => res.text()
    ).then(
      status => {setStatus(status)}
    )
  })

  const keys1 = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
                ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
                ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
                ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', 'right shift'],
                new Array(12).fill(''),
                ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
                ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}'],
                ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'caps lock'],
                ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '\\', '|'],
                ['esc', 'tab', '~', '`', 'ctrl', 'left windows', 'alt', 'space', 'alt gr', 'right ctrl', 'backspace', 'delete'],
                ['print screen', 'home', 'num lock', 'page up', 'page down', 'end', 'left', 'up', 'down', 'right', 'right windows', '']]
  const celldata1 = getFrequencies(data, keys1)
  
  return (
    <div id='heatmap' className="container">
      <HeatMapGrid
        data={celldata1}
        cellHeight="2rem"
        cellRender={(x, y, value) => getLabel(keys1[x][y],value)}
      />
      <div className="heading">
        <h2>{status}</h2>
      </div>
      <div id="button-container" className="d-grid gap-4 col-3 mx-auto">
        <a id="start-keylog-btn" role="button" className="btn btn-primary" href="http://127.0.0.1:5000/start_keylog" onClick={startKeylog}>Start/Restart Keylog</a>
        <a id="stop-keylog-btn" role="button" className="btn btn-primary" href="http://127.0.0.1:5000/stop_keylog" onClick={stopKeylog}>Stop Keylog</a>
      </div>
    </div>
    
  )
  
}

function startKeylog(){

}

function stopKeylog(){
  
}

function getLabel(key, value){
  if(key === '')
    return ''
  return key + " : " + value
}

function getFrequencies(data, keys){
  const celldata = []
  for(const [_, keyList] of keys.entries()) {
    const list = []
    for(const [j, _] of keyList.entries()){
      const res = typeof data[keyList[j]] === 'undefined' ? 0 : data[keyList[j]]
      list.push(res)
    }
    celldata.push(list)
  }
  return celldata
}

export default App