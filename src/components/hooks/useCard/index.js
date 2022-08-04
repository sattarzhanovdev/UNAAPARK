import React from 'react'
import { API } from '../../../configs/api'

export const useCard = () => {

  const [base, setBase] = React.useState(null)
  const [zav, setZav] = React.useState('')

  React.useEffect(() => {
    API.get()
      .then(res => {
        const result = res ? Object.entries(res.data)
          .map(item => {
            const id = item[0]
            return {
              ...item[1],
              id
            }
          }) : []
        setBase(result)
        setZav('dsf')
      })
  }, [zav])
  return {
    base
  }
}
