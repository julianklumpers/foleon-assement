import { AuthResult } from "@src/@types/services/auth";
import { ICredentials } from "@src/components/LoginForm/LoginForm";
import BaseService from "./BaseService";

class AuthService extends BaseService {
  basePath = "/api/oauth";

  oauth = async (credentials: ICredentials): Promise<AuthResult> => {
    const { email: username, password } = credentials;

    // generally its a bad idea to hardcode client_id and client_secret
    const data = {
      grant_type: "password",
      client_id: "avwi48Oz0X",
      client_secret:
        "7b25d5872f7f5be38a765704dc875a83272aa69b3216054425aef4998e347f58",
      username,
      password,
    };

    const res = await this.axios.post<AuthResult>(this.basePath, data);

    return res.data;
  };
}

export default new AuthService();
