import * as Seq from "sequelize";
import * as config from "./config.json";
import {
  Account,
  Chunk,
  Customer,
  Contact,
  Matter,
  Address,
  Phone,
  Email,
  Web,
  EndType,
  Passwords
} from "./ObjectDefinitions";
import IConfig from "./IConfig";
const con: IConfig = config as IConfig;
export const database = new Seq.Sequelize(con.database, con.user, con.pass, {
  host: con.server,
  dialect: con.dialect,
  pool: con.pool
});
export interface IdbPasswords extends Seq.Model {
  unameid: number;
  password: string;
}
export interface IdbAccount extends Seq.Model {
  id: number;
  uname: string;
  fname: string;
  lname: string;
  mname: string;
  address: number;
  email: string;
}
type dbPasswordStatic = typeof Seq.Model & {
  new (values?: object, options?: Seq.BuildOptions): IdbPasswords;
};
type dbAccountStatic = typeof Seq.Model & {
  new (values?: object, options?: Seq.BuildOptions): IdbAccount;
};
export const dbPassword = <dbPasswordStatic>(
  database.define("password", Passwords)
);
export const dbAccount = <dbAccountStatic>database.define("account", Account);
export const dbContact = database.define("contact", Contact);
export const dbChunk = database.define("chunk", Chunk);
export const dbCustomer = database.define("customer", Customer);
export const dbMatter = database.define("matter", Matter);
export const dbAddress = database.define("address", Address);
export const dbPhone = database.define("phone", Phone);
export const dbEmail = database.define("email", Email);
export const dbWeb = database.define("web", Web);
export const dbEndType = database.define("endtype", EndType);
