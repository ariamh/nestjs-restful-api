import { Document } from 'mongoose'

export interface Item extends Document {
    name: String,
    description: String,
    price: Number
}
