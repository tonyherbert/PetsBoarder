import { Pet } from '../model/Pet.schema';
import { PetService } from '../service/Pet.service';
export declare class PetController {
    private readonly PetService;
    constructor(PetService: PetService);
    createPet(response: any, request: any, Pet: Pet): Promise<any>;
    read(id: any): Promise<Object>;
    update(response: any, id: any, Pet: Pet): Promise<any>;
    delete(response: any, id: any): Promise<any>;
}
