/* eslint-disable @typescript-eslint/ban-types */
import {
  Injectable,
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pet, PetDocument } from '../model/Pet.schema';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import { Request, Response } from 'express';

@Injectable()
export class PetService {
  constructor(@InjectModel(Pet.name) private PetModel: Model<PetDocument>) {}

  async createPet(Pet: Object): Promise<Pet> {
    const newPet = new this.PetModel(Pet);
    return newPet.save();
  }
  async readPet(id): Promise<any> {
    if (id.id) {
      return this.PetModel.findOne({ _id: id.id }).populate('createdBy').exec();
    }
    return this.PetModel.find().populate('createdBy').exec();
  }
  async update(id, Pet: Pet): Promise<Pet> {
    return await this.PetModel.findByIdAndUpdate(id, Pet, { new: true });
  }
  async delete(id): Promise<any> {
    return await this.PetModel.findByIdAndRemove(id);
  }
}
