import { Schema, model, Document } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

export interface DebtInterface extends Document{
    name:string;
    email:string;
    password: string;
}
const DebtSchema = new Schema({
  description: String,
  client_id: Number,
  date: Date,
  value: Number
})

DebtSchema.plugin(mongoosePaginate)

export default model<DebtInterface>('debt', DebtSchema)
