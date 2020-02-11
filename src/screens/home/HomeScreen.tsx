import React, { useState } from 'react'
import { useStoreState, useStoreActions } from '../../hooks/TypedState'

const HomeScreen: React.FC = (props) => {
  const [id, setId] = useState("")
  const { getCertificate } = useStoreState(({Certificates})=>Certificates)
  const { addCertificate } = useStoreActions(({Certificates})=>Certificates)
  const cert = getCertificate(id)
  return (
    <div>
      <p>home</p>
      <button onClick={()=>addCertificate({certInfo: {id: '123'}})}>add cert</button>
      <button onClick={()=>setId("123")}>get cert</button>
      { cert && 
        <p>{cert.certInfo.id}</p>
      }
    </div>
  )
}

export default HomeScreen