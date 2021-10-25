import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { clearData } from '../../libs/lib';
import fetchDiaria from '../GridDiaria/gridLib';


let data = [];
let dados = [];




const paginationOptions = {
    rowsPerPageText: 'Linhas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItemText: 'Todos',
    selectAllRowsItem: true,
    paginationRowsPerPageOptions:[20, 25, 30]
}
const columnsName = [
    {
        name: 'NOME',
        selector: 'nomeCredor',
        sortable: true,
        wrap: true,
        // grow: 2
    },
    {
        name: 'DESTINO',
        selector: 'localidade',
        sortable: true,
        wrap: true,
        // grow: 2
    },
    {
        name: 'SAIDA',
        selector: 'dataInicio',
        sortable: true
    },
    {
        name: 'RETORNO',
        selector: 'dataRetorno',
        sortable: true,
        right: true
    },

    {
        name: 'TOTAL CONC.',
        selector: 'quantidadeDiarias',
        sortable: true
    },
    {
        name: 'TOTAL RECEBIDO',
        selector: 'valor',
        sortable: true,
        right : true
    },
    // {
    //     name: 'MATRICULA',
    //     selector: 'matricula',
    //     sortable: true
    // },
    {
        name: 'FINALIDADE',
        selector: 'motivo',
        sortable: true,
        wrap: true,
        grow: 7
    },
    {
        name: 'ORGÂO',
        selector: 'descUnidadeOrcamentaria',
        sortable: true,
        wrap: true,
        // grow: 2
    },
    {
        name: 'CARGO',
        selector: 'cargo',
        sortable: true,
        wrap: true,
        // grow: 2
    },
    
]
const customStyles = {
    rows: {
        style: {
            minHeight: '105px', // override the row height
            marginTop: '3px',
            marginBottom: '5px',
        
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};



async function RenderGridDiaria(raw) {
    const  [datas, setData] = useState([]);
    console.log(raw)

    dados = await fetchDiaria(raw);
    console.log(dados)

    data = clearData(dados.content)
    // setTotalRows(dados.totalElements)

    // setData(dados)
//    console.log (data) 


    // setData(props.data)
    console.log(data)

    return (
        <div className="RenderGridDiaria">
            <div className="table-responsive">
                <DataTable
                    columns={columnsName}
                    data={data}
                    title='Diarias concedidas'
                    // dense='true'
                    customStyles={customStyles} 
                    pagination
                    striped true
                    paginationComponentOptions={paginationOptions}
                    fixedHeader
                />
            </div>
        </div>
    )
}

export default RenderGridDiaria