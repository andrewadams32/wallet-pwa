import React from 'react'
import { useStoreState } from '../../hooks/TypedState'

const HomeScreen: React.FC = (props) => {
  console.log('in home screen', props)
  const getCert = useStoreState((state)=>state.Certificate.getCertificate)('123')
  return (
    <div>home</div>
  )
}

export default HomeScreen