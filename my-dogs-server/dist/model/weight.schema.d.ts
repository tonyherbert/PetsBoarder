import mongoose from 'mongoose';
import { Pet } from './Pet.schema';
export declare class WeightEntry {
    weight: number;
    date: Date;
    Pet: Pet;
}
export declare const WeightEntrySchema: mongoose.Schema<WeightEntry, mongoose.Model<WeightEntry, any, any, any, mongoose.Document<unknown, any, WeightEntry> & Omit<WeightEntry & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, WeightEntry, mongoose.Document<unknown, {}, mongoose.FlatRecord<WeightEntry>> & Omit<mongoose.FlatRecord<WeightEntry> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
