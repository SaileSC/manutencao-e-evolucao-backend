import { cleanEnv, port, num } from "envalid";
function validadeEnv() {
  cleanEnv(process.env, {
    BACKEND_PORT: port(),
    BCRYPT_ROUNDS: num(),
  });
}

export default validadeEnv;
