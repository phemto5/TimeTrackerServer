export default interface ILoginResponse {
  msg: string;
  account: number;
  token: string;
  expires: Date;
  generateExiresDate: () => {};
}
