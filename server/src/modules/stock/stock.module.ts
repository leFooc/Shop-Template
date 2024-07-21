import { Module } from "@nestjs/common";
import { PrismaModule } from "src/config/db/prisma.module";
import { StockController } from "./stock.controller";
import { StockService } from "./stock.service";

@Module({
    imports: [PrismaModule],
    exports: [],
    controllers: [StockController],
    providers: [StockService],
})
export class StockModule {};