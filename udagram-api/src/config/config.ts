import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: Number(process.env.PORT),
  dbPort: Number(process.env.POSTGRES_PORT),
  host: process.env.POSTGRES_HOST,
  dialect: "postgres",
  awsRegion: process.env.AWS_REGION,
  awsProfile: process.env.AWS_PROFILE,
  awsMediaBucket: process.env.AWS_BUCKET_NAME,
  awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
  awsAccessSecret: process.env.AWS_ACCESS_SECRET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
