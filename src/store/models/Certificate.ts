export interface CertificateSchema {
  name: string;
  blockchainAddress: string;
}

const CertificateModel: CertificateSchema = {
  name: "",
  blockchainAddress: ""
};

export default CertificateModel;
