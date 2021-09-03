import React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { getVinos } from '../actions';
import Card from './Card';

function Home(props) {

    useEffect(() => {
        props.getVinos();
    }, []);

    return (
        <div>
            {
                props.vinos?.map((elem) => {
                    return (
                        <div>
                                <Card
                                    nombre={elem.nombre}
                                    imagen={elem.imagen}
                                    precio={elem.precio}
                                    descripcion={elem.descripcion}
                                    aroma={elem.aroma}
                                    color={elem.color}
                                    maridaje_int={elem.maridaje_int}
                                    maridaje_peru={elem.maridaje_peru}
                                    key={elem.id}
                                ></Card>
                        </div>
                    );
                })
            }
        </div>
    )
};

function mapStateToProps(store) {
    return {
      vinos: store.vinos
    }
}

export default connect(mapStateToProps,{ getVinos })(Home);