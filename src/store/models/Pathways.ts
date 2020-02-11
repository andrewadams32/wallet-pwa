import { Computed, computed, persist } from "easy-peasy";
import * as localforage from 'localforage'

export interface Pathway {
  pathwayInfo: {
    issuers: string[]; // id of issuer; allow for multiple issuers to be included in a single pathway? ex: a csci degree requires a math course?
    certificates: string[] // id of cert
    name: string
    description: string
    status: {
      finished: number,
      needed: number
    }
  }
}

export interface PathwaysSchema {
  pathways: Pathway[]
  totalPathways: Computed<PathwaysSchema>
};

const PathwaysModel: PathwaysSchema = persist({
  pathways: [],
  totalPathways: computed((state)=>state.pathways.length)
}, {
  mergeStrategy: 'mergeDeep',
  storage: localforage
})

export default PathwaysModel;
