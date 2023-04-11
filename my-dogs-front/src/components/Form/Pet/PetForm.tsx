import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import petRepository from "../../../repository/pet.repository";
import { PetFormData } from "./type";

// interface PetFormProps {
//   onSubmit: (data: any) => void;
// }

const PetForm: React.FC = () => {
  const { control, handleSubmit } = useForm<PetFormData>();

  const submitHandler = (data: PetFormData) => {
    petRepository.createPet(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Controller
        name="petType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Type d'animal"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Controller
        name="lofName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Nom LOF"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Controller
        name="surname"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Nom"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Controller
        name="sex"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth required margin="normal">
            <InputLabel>Sexe</InputLabel>
            <Select {...field}>
              <MenuItem value="male">Mâle</MenuItem>
              <MenuItem value="female">Femelle</MenuItem>
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="transponderNumber"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Numéro de transpondeur"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Controller
        name="lofNumber"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Numéro LOF"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Controller
        name="birthdate"
        control={control}
        defaultValue={undefined}
        render={({ field }) => (
          <TextField
            {...field}
            type="date"
            label="Date de naissance"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Controller
        name="dress"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Robe"
            margin="normal"
            fullWidth
            required
          />
        )}
      />

      <Button type="submit" variant="contained" color="primary">
        Soumettre
      </Button>
    </form>
  );
};

export default PetForm;
