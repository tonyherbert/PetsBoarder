import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Pet } from './Pet.schema';

@Schema()
export class WeightEntry {
  @Prop()
  weight: number;
  @Prop({ default: Date.now() })
  date: Date;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' })
  Pet: Pet;
}

export const WeightEntrySchema = SchemaFactory.createForClass(WeightEntry);
