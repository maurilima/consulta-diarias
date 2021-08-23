import React from 'react';
import reactDom from 'react-dom';
import DataTable from 'react-data-table-component';





const paginationOptions = {
    rowsPerPageText: 'Linhas por Página',
    rangeSeparatorText: 'de',
    selectAllRowsItemText: 'Todos',
    selectAllRowsItem: true
}
const columnsName = [
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
        right : true
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

function GridDiaria(data) {

reactDom.render(
    <RenderGridDiaria  />, document.getElementById('grid-diarias')
);


function RenderGridDiaria() {
    return (
        <div className="RenderGridDiaria">
            <div className="table-responsive">
                <DataTable
                    columns={columnsName}
                    data={data}
                    title='Diarias concedidas'
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