import { create } from 'apisauce';
import { GLOBAL_CONFIG } from '../../global';


const mainServer = create({
    baseURL: GLOBAL_CONFIG.serverUrl,
});


export default mainServer;