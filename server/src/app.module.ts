import { Module } from '@nestjs/common';
import { CategoryModule } from './modules/category/category.module';
import { StockModule } from './modules/stock/stock.module';
import { ProductModule } from './modules/product/product.module';
@Module({
  imports: [CategoryModule, StockModule, ProductModule],
  exports: [],
})
export class AppModule {};
