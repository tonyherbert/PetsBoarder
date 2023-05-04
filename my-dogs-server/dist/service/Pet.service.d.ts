import { Model } from 'mongoose';
import { Pet, PetDocument } from '../model/Pet.schema';
export declare class PetService {
    private PetModel;
    constructor(PetModel: Model<PetDocument>);
    createPet(Pet: Object): Promise<Pet>;
    readPet(id: any): Promise<any>;
    update(id: any, Pet: Pet): Promise<Pet>;
    delete(id: any): Promise<any>;
}
