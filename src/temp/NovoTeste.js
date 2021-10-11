import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import reactDom from 'react-dom';
import { URL_DP } from '../config/urlApi';
import getApiEndPoint from '../libs/getApiEndPoint';
import { clearData } from '../libs/lib';


const columns = [
    {
        name: 'NOME',
        selector: 'nomeCredor',
        sortable: true,
        grow: 2
    },
    {
        name: 'CARGO',
        selector: 'cargo',
        sortable: true,
        grow: 2
    },
    {
        name: 'V.RECEBIDO',
        selector: 'valor',
        sortable: true,
        right: true
    },
    {
        name: 'ORGÂO',
        selector: 'descUnidadeOrcamentaria',
        sortable: true,
        grow: 2
    },
    {
        name: 'MATRICULA',
        selector: 'matricula',
        sortable: true
    },
    {
        name: 'SAIDA',
        selector: 'dataInicio',
        sortable: true
    },
    {
        name: 'RETORNO',
        selector: 'dataRetorno',
        sortable: true
    },
    {
        name: 'FINALIDADE',
        selector: 'motivo',
        sortable: true,
        grow: 3
    },
    {
        name: 'DESTINO',
        selector: 'localidade',
        sortable: true
    },
    {
        name: 'D.CONC.',
        selector: 'quantidadeDiarias',
        sortable: true
    }





]


function Remote(raw) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    // const [perPage, setPerPage] = useState(10);
    let dados = [];


    const fetchUsers = async (raw, page) => {
        setLoading(true);

        const lRaw = { ...raw, page: { page } }
        console.log(lRaw)


        const response = await getApiEndPoint(lRaw, URL_DP);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${perPage}&delay=1`);

        dados = clearData(response.content)

        setData(dados);
        setTotalRows(response.totalElements);
        setLoading(false);
    };

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (raw, page) => {
        setLoading(true);

        const lRaw = { ...raw, page: { page } }
        console.log(lRaw)


        const response = await getApiEndPoint(lRaw, URL_DP);

        dados = clearData(response.content)
        setData(dados);

        // const response = await axios.get(`https://reqres.in/api/users?page=${page}&per_page=${newPerPage}&delay=1`);

        // setData(response.data.data);
        // setPerPage(newPerPage);
        // setLoading(false);
    };

    useEffect((raw)   => {
        fetchUsers(raw, 0); // fetch page 1 of users

    }, []);

    return (
       <DataTable
            title="Users"
            columns={columns}
            data={data}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
        />
        )
        

	
}

export default Remote;