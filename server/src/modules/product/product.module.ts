import { Module } from "@nestjs/common";
import { PrismaModule } from "src/config/db/prisma.module";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
    imports: [PrismaModule],
    exports: [],
    controllers: [ProductController],
    providers: [ProductService],
}) 
export class ProductModule {};