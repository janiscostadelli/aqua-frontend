import { useLayoutEffect } from "react"
import { useHistory } from "react-router"
import { goToMusicsPage } from "../routes/coordinator"

const useUnprotectedPage = () => {
  const history = useHistory()
  useLayoutEffect(()=>{
    const token = localStorage.getItem('token')
    if (token){
      goToMusicsPage(history)
    }
  }, [history])
}

export default useUnprotectedPage;