import ILoginResponse from "./ILoginRespoonse";

export default class LoginResponse implements ILoginResponse {
  msg: string;
  account: number;
  token: string;
  expires: Date;
  constructor(accountid: number) {
    this.msg = "failed";
    this.account = accountid;
    this.token = null;
    this.expires = new Date();
  }
  generateExiresDate() {
    let expires = new Date();
    expires.setHours(expires.getHours() + 24);
    this.expires = expires;
    return this;
  }
}
