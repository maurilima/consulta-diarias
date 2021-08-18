export const BASE_AUTH = 'oauth/token';
let userPw = 'ewfWEF55465#@#';
var userName = 'portal_transparencia';
export let encoded = btoa(userName+':'+userPw);
export let AUTH = 'Basic ' + encoded;

