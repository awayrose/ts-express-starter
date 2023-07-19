import { config } from 'dotenv';
import path from 'path';

const env_dir = `../../env/.env.${process.env.NODE_ENV || 'development'}`;
const envConfig = config({ path: path.join(__dirname, env_dir) });

export default {
  /**
   * Your PORT
   */
  server_port: parseInt(envConfig.parsed.PORT),

  /**
   * Your secret sauce
   */
  jwtSecret: envConfig.parsed.JWT_SECRET,
  jwtAlgorithm: envConfig.parsed.JWT_ALGO,

  pgHost: envConfig.parsed.POSTGRES_HOST,
  pgDB: envConfig.parsed.POSTGRES_DB,
  pgUser: envConfig.parsed.POSTGRES_USER,
  pgPWD: envConfig.parsed.POSTGRES_PASSWORD
};
