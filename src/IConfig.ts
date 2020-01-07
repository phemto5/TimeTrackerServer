import { Dialect } from "sequelize/types";

interface IConfig {
  server: string;
  database: string;
  dialect: Dialect;
  user: string;
  pass: string;
  pool: IPool;
}

interface IPool {
  max: number;
  min: number;
  idle: number;
}
export default IConfig;