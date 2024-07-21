import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from "fs";

async function bootstrap() {
  const HttpsOption = {
    key: fs.readFileSync("./security/key.pem"),
    cert: fs.readFileSync("./security/cert.pem"),
  }

  const app = await NestFactory.create(AppModule, {
    httpsOptions: HttpsOption
  });
  await app.listen(8080);
}
bootstrap();
