
import { ProgressCircle } from '../../libs/Progress';
import { disableEnableSpinner } from '../../libs/lib';
import { getApiEndPoint } from '../../libs/getApiEndPoint';
import { URL_DP } from '../../config/urlApi';


let progressCreated = false;


async function fetchDiaria(raw, page = 0) {
    if (!progressCreated) {
        ProgressCircle();
        progressCreated = true
    }
    else { disableEnableSpinner('block') }  
    //  raw =  {...raw, page : {page}}

    //  console.log(raw)
    
    const data = await getApiEndPoint(raw, URL_DP);
    
    disableEnableSpinner('none')
    return data;


}

export default fetchDiaria
