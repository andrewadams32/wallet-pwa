import CertificatesModel, { CertificatesSchema } from "./Certificates";
import UserModel, { UserSchema } from "./User";
import IssuerModel, { IssuersSchema } from "./Issuers";

export interface StoreSchema {
  User: UserSchema;
  Certificate: CertificatesSchema;
  Issuer: IssuersSchema
}

const StoreModel: StoreSchema = {
  User: UserModel,
  Certificate: CertificatesModel,
  Issuer: IssuerModel
};

export default StoreModel;
