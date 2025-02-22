import {React, memo} from 'react'

const accountLayout = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default memo(accountLayout)