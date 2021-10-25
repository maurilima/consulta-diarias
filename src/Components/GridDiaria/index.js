import React from 'react';
import reactDom from 'react-dom';
import RenderGridDiaria from '../TabelaDados';
// import fetchDiaria from './gridLib';




// let progressCreated = false;




function GridDiaria(raw) {
    // const  [data, setData] = useState([]);
    // const [loading, setLoading] = useState(false);
    



reactDom.render(
    <RenderGridDiaria dados={raw}/>, 
    document.getElementById('grid-diarias')
);




}

export default GridDiaria