import {memo} from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const MasterLayout = ({children, ...props}) => {
  return (
    <div {...props}>
        <Navbar/>
        {children}
        <Footer/>
    </div>
    
  )
}

export default memo(MasterLayout)