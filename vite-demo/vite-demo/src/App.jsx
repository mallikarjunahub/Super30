import Options from './components/options'
import ChatList from './components/chatList'
import ChatDetails from './components/chatDetails'
import './App.css'

function App() {
  return (
    <div className="flex">
      <Options />
      <ChatList />
      <ChatDetails />
    </div>
  )
}

export default App
