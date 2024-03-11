import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Item } from './item.model'

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    async getAllItems(): Promise<Item[]> {
        return await this.itemModel.find().exec()
    }

    async getItemById(id: string): Promise<Item> {
        return await this.itemModel.findById(id).exec()
    }

    async createItem(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item)
        return await newItem.save()
    }

    async updateItem(id: string, newItem: Item): Promise<Item> {
        return this.itemModel.findByIdAndUpdate(id, newItem, { new: true })
    }

    async deleteItem(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndDelete(id)
    }
}
