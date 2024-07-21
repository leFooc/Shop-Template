import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Body, Param, ParseIntPipe } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { ZodValidationPipe } from "src/zodValidation.pipe";
import { CategoryService } from "./category.service";
import { CreateCategoryDTO, CreateCategorySchema, CreateSubCategoryDTO, CreateSubCategorySchema } from "./category.type";

@Controller("category")
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
    ) {};

    @Get()
    @HttpCode(HttpStatus.OK)
    async getCategories() {
        try {
            return await this.categoryService.getCategories();
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                status: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error,
            });
        };
    };

    @Post("category1")
    @HttpCode(HttpStatus.CREATED)
    async createCategory_1(
        @Body(new ZodValidationPipe(CreateCategorySchema)) data: CreateCategoryDTO
    ) {
        try {
            await this.categoryService.createCategory_1(data.name);
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                status: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error,
            });
        };
    };

    @Post("category2")
    @HttpCode(HttpStatus.CREATED)
    async createCategory_2(
        @Body(new ZodValidationPipe(CreateSubCategorySchema)) data: CreateSubCategoryDTO
    ) {
        try {
            const {name, super_category_id: id} = data;
            await this.categoryService.createCategory_2(name, id);
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                statusCode: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error
            });
        };
    };

    @Put("category1/:id")
    @HttpCode(HttpStatus.OK)
    async updateCategory_1(
        @Param("id", ParseIntPipe) id: number,
        @Body(new ZodValidationPipe(CreateCategorySchema)) { name }: CreateCategoryDTO,
    ) {
        try {
            await this.categoryService.updateCategory_1(id, name);
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                status: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error,
            });
        };
    };

    @Put("category2/:id")
    @HttpCode(HttpStatus.OK)
    async updateCategory_2(
        @Param("id", ParseIntPipe) id: number,
        @Body(new ZodValidationPipe(CreateCategorySchema)) { name }: CreateCategoryDTO,
    ) {
        try {
            await this.categoryService.updateCategory_2(id, name);
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                status: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error,
            });
        };
    };

    @Delete("category1/:id")
    @HttpCode(HttpStatus.OK)
    async deleteCategory_1(
        @Param("id", ParseIntPipe) id: number
    ) {
        try {
            await this.categoryService.deleteCategory_1(id);
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                statusCode: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error,
            });
        };
    };

    @Delete("category2/:id")
    @HttpCode(HttpStatus.OK)
    async deleteCategory_2(
        @Param("id", ParseIntPipe) id: number
    ) {
        try {
            await this.categoryService.deleteCategory_2(id);
        } catch(error) {
            const statusCode: number = error.status ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
            const errMsq: string = error.message ? error.message : "Internal server error";
            throw new HttpException({
                status: statusCode,
                message: errMsq,
            }, statusCode, {
                cause: error,
            });
        };
    };
};