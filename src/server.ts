import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as Seq from "sequelize";
import * as finale from "finale-rest";
import * as http from "http";
import * as https from "https";
import Login from "./Login";
import { AddressInfo } from "net";
import {
  database,
  dbPassword,
  dbAccount,
  IdbAccount,
  IdbPasswords,
  dbChunk,
  dbCustomer,
  dbMatter,
  dbAddress,
  dbPhone,
  dbEmail,
  dbWeb,
  dbEndType
} from "./Database";
import LoginResponse from "./LoginResponse";
// import { runInNewContext } from "vm";
database
  .authenticate()
  .then(() => {
    console.log("Authneticated to Database");
  })
  .catch(err => {
    console.error(err);
  });
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/login", async (req, res, next) => {
  let payload: Login = req.body;

  let opts: Seq.FindOptions = { where: { uname: payload.uname } };
  let acct: IdbAccount = { id: null } as IdbAccount;
  let pass: IdbPasswords = {} as IdbPasswords;
  let lresp = new LoginResponse(0);
  try {
    acct = await dbAccount.findOne(opts);
    if (acct.id) {
      pass = await dbPassword.findOne({ where: { unameid: acct.id } });
      if (pass && pass.unameid) {
        console.log("unameid");
        if (pass.password == payload.pass) {
          console.log(`Name ${acct.uname} passhash ${pass.password}`);
          lresp.accountId = acct.id;
          lresp.msg = "sucess";
          lresp.token = "downFought";
          let expires = new Date();
          expires.setHours(expires.getHours() + 24);
          lresp.expires = expires;
        } else {
          console.error("passwords don't match");
          lresp.msg = "Passwords don't Match";
        }
      } else {
        console.error("password Not Found");
        lresp.msg = "password not in database";
      }
    } else {
      console.error("No One Found");
      lresp.msg = "Login Not found";
    }
  } catch (e) {
    console.log(`Login Failed for :`, e);
  }

  res.json(lresp);
  next();
});
app.post("/createAccount", (req, res, next) => {
  next();
});

finale.initialize({
  app: app,
  sequelize: database
});
// eslint-disable-next-line no-unused-vars
let passwordsResource = finale.resource({
  model: dbPassword,
  endpoints: ["/password", "/password/:id"],
  search: {
    param: "unameid",
    attributes: ["unameid"]
  }
});

// eslint-disable-next-line no-unused-vars
let accountResource = finale.resource({
  model: dbAccount,
  endpoints: ["/account", "/account/:id"]
});
// eslint-disable-next-line no-unused-vars
let chunkResource = finale.resource({
  model: dbChunk,
  endpoints: ["/chunks", "/chunks/:id"],
  search: {
    param: "owner",
    attributes: ["owner"]
  }
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
const declareport = (server: http.Server | https.Server) => {
  let addressinfo = server.address() as AddressInfo;
  let host = addressinfo.address;
  let port = addressinfo.port;
  console.log(`Listening on ${host}:${port}`);
};

let server = http.createServer(app);
let sslserver = https.createServer(app);

database.sync({ force: true }).then(() => {
  server.listen(8081, () => {});
  sslserver.listen(8443, () => {});
  declareport(server);
  declareport(sslserver);
});
