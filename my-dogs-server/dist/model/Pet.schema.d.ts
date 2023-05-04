import * as mongoose from 'mongoose';
import { User } from './user.schema';
export type PetDocument = Pet & Document;
export declare class Pet {
    petType: string;
    lofName: string;
    surname: string;
    sex: string;
    transponderNumber: string;
    lofNumber: string;
    birthdate: Date;
    dress: string;
    createDate: Date;
    createdBy: User;
    get age(): number;
}
export declare const PetSchema: mongoose.Schema<Pet, mongoose.Model<Pet, any, any, any, mongoose.Document<unknown, any, Pet> & Omit<Pet & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Pet, mongoose.Document<unknown, {}, mongoose.FlatRecord<Pet>> & Omit<mongoose.FlatRecord<Pet> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
