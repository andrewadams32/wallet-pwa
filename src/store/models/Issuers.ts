import { Computed, computed, persist } from "easy-peasy";
import * as localforage from 'localforage'

export interface Issuer {
  id: string
  name: string
  email: string
  url: string
}
export interface IssuersSchema {
  issuers: Issuer[];
  totalIssuers: Computed<IssuersSchema>;
  getIssuer: Computed<IssuersSchema, (id: string) => Issuer | null>;
}

const IssuerModel: IssuersSchema = persist({
  issuers: [],
  totalIssuers: computed((state)=>state.issuers.length),
  getIssuer: computed(state => (id: string) => {
    let res = state.issuers.find(issuer => issuer.name === id);
    if (res) return res;
    else return null;
  })
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
});

export default IssuerModel;