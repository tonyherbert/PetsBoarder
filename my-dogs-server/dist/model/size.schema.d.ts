import mongoose from 'mongoose';
import { Pet } from './Pet.schema';
export declare class SizeEntry {
    height: number;
    date: Date;
    Pet: Pet;
}
export declare const SizeEntrySchema: mongoose.Schema<SizeEntry, mongoose.Model<SizeEntry, any, any, any, mongoose.Document<unknown, any, SizeEntry> & Omit<SizeEntry & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, SizeEntry, mongoose.Document<unknown, {}, mongoose.FlatRecord<SizeEntry>> & Omit<mongoose.FlatRecord<SizeEntry> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
