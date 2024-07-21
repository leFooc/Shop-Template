import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/config/db/prisma.service";
import { ColorDTO, SizeDTO, CreateColorDTO, CreateSizeDTO } from "./product.type";

@Injectable()
export class ProductService {
    constructor (
        private readonly prismaService: PrismaService,
    ) {};

    async getColors() {
        return await this.prismaService.color.findMany({
            select: {
                id: true,
                name: true,
                display_value: true,
            }
        }); 
    };

    async createColor(data: CreateColorDTO) {
        await this.prismaService.color.create({
            data: {
                name: data.name,
                display_value: data.display_value,
            }
        });
    };

    async updateColor(id: number, data: ColorDTO) {
        const ColorCheck = await this.prismaService.color.findFirst({
            where: {
                id: id
            }
        });
        if(!ColorCheck) throw new NotFoundException("Color Not Found");

        await this.prismaService.color.update({
            where: {
                id: id
            },
            data: data
        });
    };

    async deleteColor(id: number) {
        const ColorCheck = await this.prismaService.color.findFirst({
            where: {
                id: id
            }
        });
        if(!ColorCheck) throw new NotFoundException("Color Not Found");

        await this.prismaService.color.delete({
            where: {
                id: id
            }
        });
    };

    async getSize() {
        return await this.prismaService.size.findMany({
            select: {
                id: true,
                name: true
            }
        });
    };

    async createSize(data: CreateSizeDTO) {
        await this.prismaService.size.create({
            data: {
                name: data.name
            }
        });
    };

    async updateSize(id: number, data: SizeDTO) {
        const SizeCheck = await this.prismaService.size.findFirst({
            where: {
                id: id
            }
        });
        if(!SizeCheck) throw new NotFoundException("Size Not Found");

        await this.prismaService.size.update({
            where: {
                id: id
            },
            data: data
        });
    };

    async deleteSize(id: number) {
        const SizeCheck = await this.prismaService.size.findFirst({
            where: {
                id: id
            }
        });
        if(!SizeCheck) throw new NotFoundException("Size Not Found");

        await this.prismaService.size.delete({
            where: {
                id: id
            }
        });
    };

    
};