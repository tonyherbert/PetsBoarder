"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Pet_schema_1 = require("../model/Pet.schema");
let PetService = class PetService {
    constructor(PetModel) {
        this.PetModel = PetModel;
    }
    async createPet(Pet) {
        const newPet = new this.PetModel(Pet);
        return newPet.save();
    }
    async readPet(id) {
        if (id.id) {
            return this.PetModel.findOne({ _id: id.id }).populate('createdBy').exec();
        }
        return this.PetModel.find().populate('createdBy').exec();
    }
    async update(id, Pet) {
        return await this.PetModel.findByIdAndUpdate(id, Pet, { new: true });
    }
    async delete(id) {
        return await this.PetModel.findByIdAndRemove(id);
    }
};
PetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(Pet_schema_1.Pet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PetService);
exports.PetService = PetService;
//# sourceMappingURL=Pet.service.js.map