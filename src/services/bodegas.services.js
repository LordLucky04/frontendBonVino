import axios from 'axios';

const URL = 'http://localhost:8080/actualizacion/bodegas';

const getBodegas = async () => {
    try{
        const res = await axios.get(URL);
        return res.data;
    } catch (error){
        console.error(error);
        return [];
    }
}
const postBodegas = async (bodegas) => {
    try{
        const res = await axios.patch(URL, bodegas,{
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (error){
        console.error(error);
        return [];
    }
}

export default {
    getBodegas,
    postBodegas
}