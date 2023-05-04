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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizeEntrySchema = exports.SizeEntry = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const Pet_schema_1 = require("./Pet.schema");
let SizeEntry = class SizeEntry {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], SizeEntry.prototype, "height", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: Date.now() }),
    __metadata("design:type", Date)
], SizeEntry.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Pet' }),
    __metadata("design:type", Pet_schema_1.Pet)
], SizeEntry.prototype, "Pet", void 0);
SizeEntry = __decorate([
    (0, mongoose_1.Schema)()
], SizeEntry);
exports.SizeEntry = SizeEntry;
exports.SizeEntrySchema = mongoose_1.SchemaFactory.createForClass(SizeEntry);
//# sourceMappingURL=size.schema.js.map