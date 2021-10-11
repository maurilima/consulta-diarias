
import getApiEnPoint from '../../libs/getApiEndPoint'
const BASE_U = 'api/v1/diarias?'


export async function ValidarApi(raw) {

  const ret = await getApiEnPoint(raw, BASE_U)
  // console.log(ret)
  console.log(ret.totalPages)
  return (
    <h2>Foi</h2>
  )
}

export default ValidarApi;