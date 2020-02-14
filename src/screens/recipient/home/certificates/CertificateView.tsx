import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useStoreActions, useStoreState } from '../../../../hooks/TypedState'
import useTitle from '../../../../hooks/useTitle'
import imgstring from './testimg'
import { Container, Typography } from '@material-ui/core'

type params = {
  certID: string
}
const CertificateView: React.FC<RouteComponentProps<params>> = ({match}) => {
  console.log('props', match.params)
  const cert = useStoreState((state)=>state.Certificates.getCertificate)(match.params.certID)
  const addCert = useStoreActions((actions)=>actions.Certificates.addCertificate)
  useTitle(cert ? cert.certInfo.title : "")

  useEffect(()=>{
    if(cert){
      console.log("cert", cert)
    } else {
      addCert({
        certInfo: {
          description: "test cert",
          id: match.params.certID,
          issuerName: "Me",
          narrative: "This is a narrative",
          img: imgstring,
          title: "testing",
          signatures: []
        },
        requirements: {
          elective: true,
          required: false,
          sequence: true
        }
      })
    }
  },[cert, addCert])

  return cert ? (
    <Container>
      <Typography>
        {cert.certInfo.description}
      </Typography>
      <img src={cert.certInfo.img}/>
    </Container>
  ) : <div>loading...</div>
}

export default CertificateView