import * as Seq from "sequelize";
export const Account = {
  uname: Seq.STRING,
  fname: Seq.STRING,
  lname: Seq.STRING,
  mname: Seq.STRING,
  address: Seq.INTEGER,
  email: Seq.INTEGER,
  password: Seq.STRING
};
export const Chunk = {
  start: Seq.STRING,
  open: Seq.BOOLEAN,
  stop: Seq.STRING,
  customer: Seq.INTEGER,
  body: Seq.TEXT,
  tag: Seq.STRING,
  owner: Seq.INTEGER
};
export const Customer = {
  name: Seq.STRING
};
export const Matter = {
  fname: Seq.STRING,
  mname: Seq.STRING,
  lname: Seq.STRING,
  customerId: Seq.INTEGER
};
export const Address = {
  street1: Seq.STRING,
  street2: Seq.STRING,
  city: Seq.STRING,
  country: Seq.STRING,
  zip: Seq.INTEGER,
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
  name: Seq.STRING
};
