import { Computed, computed } from "easy-peasy";

export interface Certificate {
  name: string;
  blockchainAddress: string;
}
export interface CertificatesSchema {
  certificates: Certificate[];
  totalCertificates: number;
  getCertificate: Computed<CertificatesSchema, (id: string) => Certificate | null>;
}

const CertificatesModel: CertificatesSchema = {
  certificates: [],
  totalCertificates: 0,
  getCertificate: computed(state => (id: string) => {
    let res = state.certificates.find(cert => cert.blockchainAddress === id);
    if (res) return res;
    else return null;
  })
};

export default CertificatesModel;
