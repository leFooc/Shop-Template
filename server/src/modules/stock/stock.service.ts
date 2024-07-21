import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/config/db/prisma.service";
import { ShopDTO, CreateShopDTO } from "./stock.type";

@Injectable()
export class StockService {
    constructor(
        private readonly prismaService: PrismaService
    ) {};

    async getShops() {
       return await this.prismaService.shop.findMany({
            select: {
                id: true,
                name: true,
                location: true,
            }
       });
    };

    async createShop(data: CreateShopDTO) {
        await this.prismaService.shop.create({
            data: {
                name: data.name,
                location: data.location,
            }
        });
    };

    async updateShop(id: number, data: ShopDTO) {
        const ShopCheck = await this.prismaService.shop.findFirst({
            where: {
                id: id
            }
        });
        if(!ShopCheck) throw new NotFoundException("Shop Not Found");

        await this.prismaService.shop.update({
            where: {
                id: id
            },
            data: data
        });
    };

    async deleteShop(id: number) {
        const ShopCheck = await this.prismaService.shop.findFirst({
            where: {
                id: id
            }
        });
        if(!ShopCheck) throw new NotFoundException("Shop Not Found");

        await this.prismaService.shop.delete({
            where: {
                id: id
            }
        });
    };
};