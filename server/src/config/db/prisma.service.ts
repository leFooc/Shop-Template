import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        console.log(">>> Connecting to database...");
        await this.$connect()
        .then(() => console.log(">>> Connect database successfully!"))
        .catch((error) => console.log(">>> Connect to database failed! Cause: \n", error));
    };
};