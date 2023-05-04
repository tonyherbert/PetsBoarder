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
exports.PetController = void 0;
const common_1 = require("@nestjs/common");
const Pet_schema_1 = require("../model/Pet.schema");
const Pet_service_1 = require("../service/Pet.service");
let PetController = class PetController {
    constructor(PetService) {
        this.PetService = PetService;
    }
    async createPet(response, request, Pet) {
        const requestBody = {
            lofName: Pet.lofName,
            surname: Pet.surname,
            sex: Pet.sex,
            transponderNumber: Pet.transponderNumber,
            birthdate: Pet.birthdate,
            dress: Pet.dress,
            createDate: Date.now(),
            createdBy: request.user,
        };
        console.log(requestBody);
        const newPet = await this.PetService.createPet(requestBody);
        return response.status(common_1.HttpStatus.CREATED).json({
            newPet,
        });
    }
    async read(id) {
        return await this.PetService.readPet(id);
    }
    async update(response, id, Pet) {
        const updatedPet = await this.PetService.update(id, Pet);
        return response.status(common_1.HttpStatus.OK).json(updatedPet);
    }
    async delete(response, id) {
        await this.PetService.delete(id);
        return response.status(common_1.HttpStatus.OK).json({
            user: null,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Pet_schema_1.Pet]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "createPet", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "read", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Pet_schema_1.Pet]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PetController.prototype, "delete", null);
PetController = __decorate([
    (0, common_1.Controller)('/api/v1/Pet'),
    __metadata("design:paramtypes", [Pet_service_1.PetService])
], PetController);
exports.PetController = PetController;
//# sourceMappingURL=Pet.controller.js.map