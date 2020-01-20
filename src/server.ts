import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as Seq from "sequelize";
import * as finale from "finale-rest";
import * as config from "./config.json";
import {
  Account,
  Chunk,
  Customer,
  Matter,
  Address,
  Phone,
  Email,
  Web,
  EndType
} from "./ObjectDefinitions";
import IConfig from "./IConfig";

const app = express();
app.use(cors());
app.use(bodyParser.json());
const con: IConfig = config as IConfig;
const database = new Seq.Sequelize(con.database, con.user, con.pass, {
  host: con.server,
  dialect: con.dialect,
  pool: con.pool
});
database
  .authenticate()
  .then(() => {
    console.log("Authneticated to Database");
  })
  .catch(err => {
    console.error(err);
  });
const dbAccount = database.define("account", Account);
const dbChunk = database.define("chunk", Chunk);
const dbCustomer = database.define("customer", Customer);
const dbMatter = database.define("matter", Matter);
const dbAddress = database.define("address", Address);
const dbPhone = database.define("phone", Phone);
const dbEmail = database.define("email", Email);
const dbWeb = database.define("web", Web);
const dbEndType = database.define("endtype", EndType);
finale.initialize({
  app: app,
  sequelize: database
});

// eslint-disable-next-line no-unused-vars
let accountResource = finale.resource({
  model: dbAccount,
  endpoints: ["/account", "/account/:id"]
});
// eslint-disable-next-line no-unused-vars
let chunkResource = finale.resource({
  model: dbChunk,
  endpoints: ["/chunks", "/chunks/:id"]
});
// eslint-disable-next-line no-unused-vars
let customerResources = finale.resource({
  model: dbCustomer,
  endpoints: ["/customers", "/customers/:id"]
});
// eslint-disable-next-line no-unused-vars
let matterResources = finale.resource({
  model: dbMatter,
  endpoints: ["/matter", "/matter/:id"]
});
// eslint-disable-next-line no-unused-vars
let addressResources = finale.resource({
  model: dbAddress,
  endpoints: ["/addresses", "/addresses/:id"]
});
// eslint-disable-next-line no-unused-vars
let phoneResources = finale.resource({
  model: dbPhone,
  endpoints: ["/phones", "/phones/:id"]
});
// eslint-disable-next-line no-unused-vars
let emailResources = finale.resource({
  model: dbEmail,
  endpoints: ["/emails", "/emails/:id"]
});
// eslint-disable-next-line no-unused-vars
let webResources = finale.resource({
  model: dbWeb,
  endpoints: ["/webs", "/webs/:id"]
});
// eslint-disable-next-line no-unused-vars
let endtypeResources = finale.resource({
  model: dbEndType,
  endpoints: ["/endtypes", "/endtypes/:id"]
});
database.sync({ force: false }).then(() => {
  app.listen(8081, () => {
    console.log("Listening on Localhost:8081");
  });
});
