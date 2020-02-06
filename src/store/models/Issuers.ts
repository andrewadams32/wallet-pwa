import { Computed, computed } from "easy-peasy";

export interface Issuer {
  name: string;
}
export interface IssuersSchema {
  issuers: Issuer[];
  totalIssuers: number;
  getIssuer: Computed<IssuersSchema, (id: string) => Issuer | null>;
}

const IssuerModel: IssuersSchema = {
  issuers: [],
  totalIssuers: 0,
  getIssuer: computed(state => (id: string) => {
    let res = state.issuers.find(issuer => issuer.name === id);
    if (res) return res;
    else return null;
  })
};

export default IssuerModel;
