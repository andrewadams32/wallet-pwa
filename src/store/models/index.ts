import CertificatesModel, { CertificatesSchema } from "./Certificates";
import UserModel, { UserSchema } from "./User";
import IssuerModel, { IssuersSchema } from "./Issuers";
import PathwaysModel, { PathwaysSchema } from './Pathways'
import ApplicationModel, { ApplicationSchema } from "./Application";

export interface StoreSchema {
  User: UserSchema;
  Certificates: CertificatesSchema;
  Issuers: IssuersSchema;
  Pathways: PathwaysSchema;
  Application: ApplicationSchema
}

const StoreModel: StoreSchema = {
  User: UserModel,
  Certificates: CertificatesModel,
  Issuers: IssuerModel,
  Pathways: PathwaysModel,
  Application: ApplicationModel
};

export default StoreModel;
