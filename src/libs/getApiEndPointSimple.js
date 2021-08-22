
export async function getApiEndPointSimple(endPoint) {

    var requestOptions = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache'
    };

    // console.log(endPoint)
    try {
        let res = await fetch(endPoint, requestOptions );
        // console.log(res)
        return await res.json();
    } catch (error) {
        console.log(error)
    }
}
