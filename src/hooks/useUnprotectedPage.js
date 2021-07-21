import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToHomePage } from "../routes/coordinator"

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(()=>{
    const token = localStorage.getItem('token')
    if (token){
      goToHomePage(history)
    }
  }, [history])
}

export default useUnprotectedPage;