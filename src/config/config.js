import * as dotenv from 'dotenv';
dotenv.config();

const config = {
   APP_PORT: process.env.APP_PORT || 3000,
}

export default config;