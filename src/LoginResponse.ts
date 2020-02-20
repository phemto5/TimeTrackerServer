import ILoginResponse from "./ILoginResponse";

export default class LoginResponse implements ILoginResponse {
  msg: string;
  accountId: number;
  token: string;
  expires: Date;
  constructor(accountid: number) {
    this.msg = "failed";
    this.accountId = accountid;
    this.token = "None";
    this.expires = new Date();
  }
  generateExiresDate() {
    let expires = new Date();
    expires.setHours(expires.getHours() + 24);
    this.expires = expires;
    return this;
  }
}
