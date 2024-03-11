import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './item.model';

@Controller('/items')
export class ItemController {
    constructor(private readonly itemService: ItemService) {}

    @Get()
    async getAllItems(): Promise<Item[]> {
        return this.itemService.getAllItems()
    }

    @Get(':id')
    async getItemById(@Param('id') id: string): Promise<Item> {
        return this.itemService.getItemById(id)
    }

    @Post()
    async createItem(@Body() item: Item): Promise<Item> {
        return this.itemService.createItem(item)
    }

    @Put(':id')
    async updateItem(@Param('id') id: string, @Body() item: Item): Promise<Item> {
        return this.itemService.updateItem(id, item)
    }

    @Delete(':id')
    async deleteItem(@Param('id') id: string): Promise<Item> {
        return this.itemService.deleteItem(id)
    }
}
