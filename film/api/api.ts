import axios from 'axios';

const baseUrl = 'http://10.0.3.77:8081'; // Cambia la URL base según la configuración de tu servidor

export const fetchEntities = async (route: string): Promise<Array<FetchResponses>> => {
  const url = `${baseUrl}/${route}`;
  const response = await axios.get(url);
  return response.data;
};

export const saveEntity = async (route: string, form: any): Promise<void> => {
  const url = `${baseUrl}/${route}`;
  await axios.post(url, form);
};

export const deleteEntity = async (route: string, id: number): Promise<string> => {
  const url = `${baseUrl}/${route}/delete/${id}`;
  await axios.delete(url);
  return "Borrado Exitoso";
};

/*import axios from 'axios'
const baseUrl = 'http://192.168.18.5:8081';
export const fetchFilms = async (ruta:string): Promise<Array<FetchResponses>> => {
  const url = `${baseUrl}/${ruta}`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data
};
export const saveFilm = async (ruta:string,form:number) => {
  const url = `${baseUrl}/${ruta}`;
  console.log(url)
  const response = await axios.post(url,form).catch((error)=>{console.log("Error:")});
  console.log(response?.data);
};

export const deleteFilm = async (ruta: string,id:number) => {
  const url = `${baseUrl}/${ruta}`;
  console.log(id)
  const response = await axios.delete(`${url}/delete/${id}`).catch((error)=>{console.log("Error:")});
  console.log(response?.data);
  return "Borrado Exitoso"
};*/