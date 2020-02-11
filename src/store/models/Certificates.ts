import { Computed, computed, Action, action, persist } from "easy-peasy";
import * as localforage from 'localforage'

export interface Certificate {
	certInfo: Partial<{
		id: string
		img: string
		narrative: string
		description: string
		signatures: string[] // signature
		completedOn?: Date
		issuerName: string
  }>,
  requirements: {
    required: boolean
    sequence: boolean
    elective: boolean
  }
}

export interface CertificatesSchema {
  certificates: Certificate[];
  totalCertificates: Computed<CertificatesSchema>;
  getCertificate: Computed<CertificatesSchema, (id: string) => Certificate | null>;
  addCertificate: Action<CertificatesSchema, Partial<Certificate>>
}

const blankCert: Certificate = {
  certInfo: {
    description: "",
    id: "",
    narrative: "",
    img: "",
    issuerName: "",
    signatures: [],
  },
  requirements: {
    elective: false,
    required: false,
    sequence: false
  }
}

const CertificatesModel: CertificatesSchema = persist({
  certificates: [],
  totalCertificates: computed((state)=>state.certificates.length),
  getCertificate: computed(state => (id: string) => {
    let res = state.certificates.find(cert => cert.certInfo.id === id);
    if (res) return res;
    else return null;
  }),
  addCertificate: action((state, payload)=>{
    let cert: Certificate = {
      ...blankCert, ...payload
    }
    state.certificates.push(cert)
  })
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
});

export default CertificatesModel;
