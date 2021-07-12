import { useEffect, useState } from 'react'
import { goToLogin } from '../routes/coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)
  const history = useHistory();
  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        if(error.response.data.error.includes('jwt expired')){
          localStorage.removeItem('token');
          goToLogin(history);
        }
      })
  }, [url, history])

  return (data)
}

export default useRequestData
