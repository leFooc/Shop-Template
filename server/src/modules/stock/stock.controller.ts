import { Controller, Get, Post, Put, Delete, HttpCode, HttpStatus, Body, Param, ParseIntPipe } from "@nestjs/common";
import { HttpException } from "@nestjs/common";
import { ZodValidationPipe } from "src/zodValidation.pipe";
import { StockService } from "./stock.service";
import { ShopSchema, ShopDTO, CreateShopSchema, CreateShopDTO } from "./stock.type";

@Controller("stock")
export class StockController {
    constructor(
        private readonly stockService: StockService,
    ) {};

    @Get("shop")
    @HttpCode(HttpStatus.OK)
    async getShops() {
        try {
            return await this.stockService.getShops();
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

    @Post("shop")
    @HttpCode(HttpStatus.CREATED)
    async createShop(
        @Body(new ZodValidationPipe(CreateShopSchema)) data: CreateShopDTO
    ) {
        try {
            await this.stockService.createShop(data);
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

    @Put("shop/:id")
    @HttpCode(HttpStatus.OK)
    async updateShop(
        @Param("id", ParseIntPipe) id: number,
        @Body(new ZodValidationPipe(ShopSchema)) data: ShopDTO
    ) {
        try {
            await this.stockService.updateShop(id, data);
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

    @Delete("shop/:id")
    @HttpCode(HttpStatus.OK)
    async deleteShop(
        @Param("id", ParseIntPipe) id: number,
    ) {
        try {
            await this.stockService.deleteShop(id);
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