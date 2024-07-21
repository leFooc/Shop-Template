import { Module } from "@nestjs/common";
import { PrismaModule } from "src/config/db/prisma.module";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";


@Module({
    imports: [PrismaModule],
    exports: [],
    controllers: [CategoryController],
    providers: [CategoryService],
}) 
export class CategoryModule {};