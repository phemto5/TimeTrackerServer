// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const Sequelize = require("sequelize");
// const finale = require("finale-rest");
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as Seq from "sequelize";
import * as finale from "finale-rest";

const app = express.default();
app.use(cors.default());
app.use(bodyParser.json());
const database = new Seq.Sequelize({
  dialect: "sqlite",
  storage: "./Time.sqlite"
});
const Chunk = database.define("chunk", {
  start: Seq.STRING,
  open: Seq.BOOLEAN,
  stop: Seq.STRING,
  customer: Seq.NUMBER,
  body: Seq.TEXT,
  tag: Seq.STRING
});
const Customer = database.define("customer", {
  name: Seq.STRING
});
const Contact = database.define("contact", {
  fname: Seq.STRING,
  mname: Seq.STRING,
  lname: Seq.STRING,
  customerId: Seq.NUMBER
});
let Address = database.define("address", {
  street1: Seq.STRING,
  street2: Seq.STRING,
  city: Seq.STRING,
  country: Seq.STRING,
  zip: Seq.NUMBER,
  endpointType: Seq.NUMBER,
  refType: Seq.STRING,
  refID: Seq.NUMBER
});
let Phone = database.define("phone", {
  number: Seq.STRING,
  endpointType: Seq.NUMBER,
  refType: Seq.STRING,
  refID: Seq.NUMBER
});
let Email = database.define("email", {
  email: Seq.STRING,
  endpointType: Seq.NUMBER,
  refType: Seq.STRING,
  refID: Seq.NUMBER
});
let Web = database.define("web", {
  uri: Seq.STRING,
  endpointType: Seq.NUMBER,
  refType: Seq.STRING,
  refID: Seq.NUMBER
});
let EndType = database.define("endtype", {
  name: Seq.STRING
});
finale.initialize({
  app: app,
  sequelize: database
});
// eslint-disable-next-line no-unused-vars
let chunkResource = finale.resource({
  model: Chunk,
  endpoints: ["/chunks", "/chunks/:id"]
});
// eslint-disable-next-line no-unused-vars
let customerResources = finale.resource({
  model: Customer,
  endpoints: ["/customers", "/customers/:id"]
});
// eslint-disable-next-line no-unused-vars
let contactResources = finale.resource({
  model: Contact,
  endpoints: ["/contacts", "/contacts/:id"]
});
// eslint-disable-next-line no-unused-vars
let addressResources = finale.resource({
  model: Address,
  endpoints: ["/addresses", "/addresses/:id"]
});
// eslint-disable-next-line no-unused-vars
let phoneResources = finale.resource({
  model: Phone,
  endpoints: ["/phones", "/phones/:id"]
});
// eslint-disable-next-line no-unused-vars
let emailResources = finale.resource({
  model: Email,
  endpoints: ["/emails", "/emails/:id"]
});
// eslint-disable-next-line no-unused-vars
let webResources = finale.resource({
  model: Web,
  endpoints: ["/webs", "/webs/:id"]
});
// eslint-disable-next-line no-unused-vars
let endtypeResources = finale.resource({
  model: EndType,
  endpoints: ["/endtypes", "/endtypes/:id"]
});
database.sync({ force: true }).then(() => {
  app.listen(8081, () => {
    console.log("Listening on Localhost:8081");
  });
});
