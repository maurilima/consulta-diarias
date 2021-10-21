import React, { useState } from 'react';
import reactDom from 'react-dom';
import DataTable from 'react-data-table-component';
import { ProgressCircle } from '../../libs/Progress';
import { clearData, disableEnableSpinner } from '../../libs/lib';
import { getApiEndPoint } from '../../libs/getApiEndPoint';
import { URL_DP } from '../../config/urlApi';



let progressCreated = false;
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




async function fetchDiaria(raw, page = 0) {
    if (!progressCreated) {
        ProgressCircle();
        progressCreated = true
    }
    else { disableEnableSpinner('block') }  
    //  raw =  {...raw, page : {page}}

     console.log(raw)
    
    const data = await getApiEndPoint(raw, URL_DP);
    
    disableEnableSpinner('none')
    return data;


}


async function GridDiaria(raw) {
    // const  [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    

    dados = await fetchDiaria(raw);

    dados = clearData(dados.content)
    // setTotalRows(dados.totalElements)

    // setData(dados)
   console.log (data) 


reactDom.render(
    <RenderGridDiaria  data ={dados} />, 
    document.getElementById('grid-diarias')
);



function RenderGridDiaria(props) {
    // const  [data, setData] = useState([]);

    // setData(props.data)

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
}

export default GridDiaria