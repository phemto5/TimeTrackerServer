import * as Seq from "sequelize";
import sequelize = require("sequelize");
//passwords are for login only
export const Passwords = {
  unameid: Seq.INTEGER,
  password: Seq.STRING
};
export const Account = {
  uname: Seq.STRING,
  fname: Seq.STRING,
  lname: Seq.STRING,
  mname: Seq.STRING
  // addresses: Seq.INTEGER,
  // emails: Seq.INTEGER
  // password: Seq.STRING
};
export const Chunk = {
  start: Seq.STRING,
  open: Seq.BOOLEAN,
  stop: Seq.STRING,
  customer: Seq.INTEGER,
  matter: Seq.INTEGER,
  body: Seq.TEXT,
  tag: Seq.STRING,
  refID: Seq.INTEGER,
  refType: Seq.STRING
};
export const Customer = {
  name: Seq.STRING
};
export const Contact = {
  fname: Seq.STRING,
  mname: Seq.STRING,
  lname: Seq.STRING,
  customerId: Seq.INTEGER,
  addresses: Seq.STRING,
  phones: Seq.STRING,
  emails: Seq.STRING,
  webSites: Seq.STRING,
  refType: Seq.STRING,
  refID: Seq.INTEGER
};
export const Matter = {
  name: Seq.STRING,
  refID: Seq.INTEGER
};
export const Address = {
  street1: Seq.STRING,
  street2: Seq.STRING,
  city: Seq.STRING,
  state: Seq.STRING,
  country: Seq.STRING,
  zip: Seq.STRING,
  endpointType: Seq.INTEGER,
  refType: Seq.STRING,
  refID: Seq.INTEGER
};
export const Phone = {
  number: Seq.STRING,
  endpointType: Seq.INTEGER,
  refType: Seq.STRING,
  refID: Seq.INTEGER
};
export const Email = {
  email: Seq.STRING,
  endpointType: Seq.INTEGER,
  refType: Seq.STRING,
  refID: Seq.INTEGER
};
export const Web = {
  uri: Seq.STRING,
  endpointType: Seq.INTEGER,
  refType: Seq.STRING,
  refID: Seq.INTEGER
};
export const EndType = {
  name: Seq.STRING,
  refID: Seq.INTEGER
};
