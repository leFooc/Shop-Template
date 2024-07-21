import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Body, Param, ParseIntPipe } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { ZodValidationPipe } from "src/zodValidation.pipe";
import { ProductService } from "./product.service";
import { ColorSchema, ColorDTO, SizeSchema, SizeDTO, CreateColorSchema, CreateColorDTO, CreateSizeSchema, CreateSizeDTO } from "./product.type";


@Controller("product")
export class ProductController {
    constructor(
        private readonly productService: ProductService,
    ) {};

    @Get("color")
    @HttpCode(HttpStatus.OK)
    async getColors() {
        try {
            return await this.productService.getColors();
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

    @Post("color")
    @HttpCode(HttpStatus.CREATED)
    async createColor(
        @Body(new ZodValidationPipe(CreateColorSchema)) data: CreateColorDTO,
    ) {
        try {
            await this.productService.createColor(data);
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

    @Put("color/:id")
    @HttpCode(HttpStatus.OK)
    async updateColor(
        @Param("id", ParseIntPipe) id: number,
        @Body(new ZodValidationPipe(ColorSchema)) data: ColorDTO,
    ) {
        try {
            await this.productService.updateColor(id, data);
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

    @Delete("color/:id")
    @HttpCode(HttpStatus.OK)
    async deleteColor(
        @Param("id", ParseIntPipe) id: number,
    ) {
        try {
            await this.productService.deleteColor(id);
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

    @Get("size")
    @HttpCode(HttpStatus.OK)
    async getSizes() {
        try {
            return await this.productService.getSize();
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

    @Post("size")
    @HttpCode(HttpStatus.CREATED)
    async createSize(
        @Body(new ZodValidationPipe(CreateSizeSchema)) data:CreateSizeDTO,
    ) {
        try {
            await this.productService.createSize(data);
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

    @Put("size/:id")
    @HttpCode(HttpStatus.OK)
    async updateSize(
        @Param("id", ParseIntPipe) id: number,
        @Body(new ZodValidationPipe(SizeSchema)) data: SizeDTO,
    ) {
        try {
            await this.productService.updateSize(id, data);
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

    @Delete("size/:id")
    @HttpCode(HttpStatus.OK)
    async deleteSize(
        @Param("id", ParseIntPipe) id: number,
    ) {
        try {
            await this.productService.deleteSize(id);
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