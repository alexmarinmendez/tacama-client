import React from 'react';

function Card(props) {
    return(
            <div className="card">
                <div className="content">
                    <img src={props.imagen} alt="no hay imagen" width='200px' height='350px' />
                    <h3>{props.nombre}</h3>
                    <span><strong>Precio:</strong> {props.precio}</span><br />
                    <span><strong>Descripcion:</strong> {props.descripcion}</span><br />
                    <span><strong>Aroma:</strong> {props.aroma}</span><br />
                    <span><strong>Color:</strong> {props.color}</span><br />
                    <span><strong>Maridaje (comida internacional):</strong> {props.maridaje_int}</span><br />
                    <span><strong>Maridaje (comida peruana):</strong> {props.maridaje_peru}</span>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                </div>
            </div>
    );
};

export default Card;