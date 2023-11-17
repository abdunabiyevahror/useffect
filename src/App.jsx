 import  {useState ,useEffect} from 'react';
 import './App.css'





function App() {
 const [list ,setList] = useState([]);
 const [loading , setLoading] =useState (false)

const fetchData = async {} => {
  setLoading (true)
  try {
    const resp = await fetch (url);
    const data = await resp.json
  }
}

  return (
    <>
    </>
  )
}

export default App
