import { AUTH, BASE_AUTH } from "../config/Config.js";
import { BASE_URL } from "../libs/urlApi.js";

let headerAuth = new Headers;

headerAuth.append('Accept', 'application/json');
headerAuth.append('Authorization', AUTH );
headerAuth.append( 'Content-Type','application/x-www-form-urlencoded')

export async function getAuthKey(){
    var requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: headerAuth,
      body: ['grant_type=client_credentials']
    }; 
    try {
        let res = await fetch(BASE_URL+BASE_AUTH, requestOptions);
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}
