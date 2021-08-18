import React from 'react';
import DataTable from 'react-data-table-component';
import { dataDiarias } from '../../temp/datapesquisa';




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
        sortable: true
    },
    {
        name: 'CARGO',
        selector: 'cargo',
        sortable: true
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
    },
    {
        name: 'V.RECEBIDO',
        selector: 'valor',
        sortable: true,
    }


]


function GridDiaria() {

    return (

        <div className="App">
            <div className="table-responsive">
                <DataTable
                    columns={columnsName}
                    data={dataDiarias}
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

export default GridDiaria