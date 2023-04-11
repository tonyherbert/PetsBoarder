import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type PetDocument = Pet & Document;
@Schema()
export class Pet {
  @Prop()
  petType: string;
  @Prop()
  lofName: string;
  @Prop()
  surname: string;
  @Prop()
  sex: string;
  @Prop()
  transponderNumber: string;
  @Prop()
  lofNumber: string;
  @Prop({ type: Date })
  birthdate: Date;
  @Prop()
  dress: string;
  @Prop({ default: Date.now() })
  createDate: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  createdBy: User;

  get age(): number {
    const diff = Date.now() - this.birthdate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }
}
export const PetSchema = SchemaFactory.createForClass(Pet);
