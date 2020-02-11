import CertificatesModel, { CertificatesSchema } from "./Certificates";
import UserModel, { UserSchema } from "./User";
import IssuerModel, { IssuersSchema } from "./Issuers";
import PathwaysModel, { PathwaysSchema } from './Pathways'

export interface StoreSchema {
  User: UserSchema;
  Certificates: CertificatesSchema;
  Issuers: IssuersSchema;
  Pathways: PathwaysSchema;
}

const StoreModel: StoreSchema = {
  User: UserModel,
  Certificates: CertificatesModel,
  Issuers: IssuerModel,
  Pathways: PathwaysModel
};

export default StoreModel;
