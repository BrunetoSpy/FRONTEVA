// BasicPetitions.ts
import axios from 'axios';
import { Character, Scene, Film } from '../app/pages/apiTypes';

const baseUrl = 'http://192.168.18.5:8081';

export const fetchEntities = async (route: string): Promise<Array<Character | Scene | Film>> => {
  try {
    const url = `${baseUrl}/${route}`;
    const response = await axios.get(url);
    return response.data as Array<Character | Scene | Film>;
  } catch (error) {
    console.error(`Error al obtener la lista de ${route}:`, error);
    throw error;
  }
};

export const saveEntity = async (route: string, form: any): Promise<void> => {
  try {
    const url = `${baseUrl}/${route}`;
    await axios.post(url, form);
  } catch (error) {
    console.error(`Error al guardar ${route}:`, error);
    throw error;
  }
};

export const deleteEntity = async (route: string, id: number): Promise<string> => {
  try {
    const url = `${baseUrl}/${route}/delete/${id}`;
    await axios.delete(url);
    return `Borrado exitoso de ${route}`;
  } catch (error) {
    console.error(`Error al borrar ${route}:`, error);
    throw error;
  }
};
