import CertificateModel, { CertificateSchema } from "./Certificate";
import UserModel, { UserSchema } from "./User";

export interface StoreSchema {
  User: UserSchema;
  Certificate: CertificateSchema;
}

const StoreModel: StoreSchema = {
  User: UserModel,
  Certificate: CertificateModel
};

export default StoreModel;
