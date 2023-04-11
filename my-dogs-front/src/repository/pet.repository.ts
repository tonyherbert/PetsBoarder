import { secret } from "./../../../my-dogs-server/src/utils/constants";
import { PetFormData } from "../components/Form/Pet/type";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_BACK_URL;
const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};
const petRepository = {
  async createPet(pet: PetFormData) {
    const response = await axios.post(`${API_URL}/api/v1/Pet`, pet, config);
    return response.data;
  },

  async readPet(id: string) {
    const response = await axios.get(`${API_URL}/pets/${id}`);
    return response.data;
  },

  async updatePet(id: string, pet: PetFormData) {
    const response = await axios.put(`${API_URL}/pets/${id}`, pet);
    return response.data;
  },

  async deletePet(id: string) {
    const response = await axios.delete(`${API_URL}/pets/${id}`);
    return response.data;
  },
};

export default petRepository;
