import { Injectable } from "@nestjs/common";
import { NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/config/db/prisma.service";

@Injectable()
export class CategoryService {
    constructor (
        private readonly prismaService: PrismaService,
    ) {};

    async getCategories () {
        return await this.prismaService.category_1.findMany({
            select: {
                id: true,
                name: true,
                sub_category: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            }
        });
    };

    async createCategory_1(name: string) {
        await this.prismaService.category_1.create({
            data: {
                name: name
            }  
        });
    };

    async createCategory_2(name: string, super_category_id: number) {
        const CategoryCheck = await this.prismaService.category_1.findFirst({
            where: {
                id: super_category_id
            }
        });
        if(!CategoryCheck) throw new NotFoundException("Category_1 Not Found");

        await this.prismaService.category_2.create({
            data: {
                name: name,
                super_category_id: super_category_id
            }
        });
    };

    async updateCategory_1(id: number, name: string) {
        const CategoryCheck = await this.prismaService.category_1.findFirst({
            where: {
                id: id
            }
        });
        if(!CategoryCheck) throw new NotFoundException("Category_1 Not Found");

        await this.prismaService.category_1.update({
            where: {
                id: id,
            },
            data: {
                name: name
            }
        });
    };

    async updateCategory_2(id: number, name: string) {
        const CategoryCheck = await this.prismaService.category_2.findFirst({
            where: {
                id: id
            }
        });
        if(!CategoryCheck) throw new NotFoundException("Category_2 Not Found");

        await this.prismaService.category_2.update({
            where: {
                id: id,
            },
            data: {
                name: name
            }
        });
    };

    async deleteCategory_1(id: number) {
        const CategoryCheck = await this.prismaService.category_1.findFirst({
            where: {
                id: id
            },
            include: {
                sub_category: true
            },
        });
        if(!CategoryCheck) throw new NotFoundException("Category_1 Not Found");

        await this.prismaService.category_1.delete({
            where: {
                id: id
            }
        });
    }

    async deleteCategory_2(id: number) {
        const CategoryCheck = await this.prismaService.category_2.findFirst({
            where: {
                id: id
            }
        });
        if(!CategoryCheck) throw new NotFoundException("Category_2 Not Found");

        await this.prismaService.category_2.delete({
            where: {
                id: id
            }
        });
    };

}