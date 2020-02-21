export default interface ILoginResponse {
  msg: string;
  accountId: number;
  token: string;
  expires: Date;
  generateExiresDate: () => {};
}
