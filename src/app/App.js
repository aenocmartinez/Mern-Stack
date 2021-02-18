import React, { Component } from 'react';

class App extends Component
{

    constructor() {
        super();
        this.state = {
                titulo: '',
                claves: [],
                descripcion: '',
                fuente: '',
                tipo: 'Testimonio',
                cobertura:{
                    fec_ini: '',
                    fec_fin: '',
                    ubicacion: ''
                }
        };
        this.agregarRecurso = this.agregarRecurso.bind(this);
        this.capturaDato = this.capturaDato.bind(this);
    }

    agregarRecurso(e) {
        console.log(this.state);
        // fetch('api/recursos', {
        //     method: "POST",
        //     body: JSON.stringify(this.state)
        // });
        e.preventDefault();
    }

    capturaDato(e) {
        const {name, value} =  e.target;        
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">
                            Mern Stack Recursos
                        </a>
                    </div>                    
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.agregarRecurso}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" onChange={this.capturaDato} name="titulo" placeholder="Título"></input>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <select name="tipo" onChange={this.capturaDato}> 
                                                    <option value="Testimonio">Testimonio</option>
                                                    <option value="Informe">Informe</option>
                                                    <option value="Caso">Caso</option>
                                                </select>
                                                <label>Tipo de recurso</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input type="text" onChange={this.capturaDato} name="fuente" placeholder="Fuente"></input>
                                            </div>
                                        </div>    

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="claves" onChange={this.capturaDato} placeholder="Palabras claves" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="descripcion" onChange={this.capturaDato} placeholder="Descripción" className="materialize-textarea"></textarea>
                                            </div>
                                        </div>   

                                        <div className="row">
                                            <div className="input-field col s12">
                                                <label>Cobertura</label>
                                                <input type="text" onChange={this.capturaDato} name="ubicacion" placeholder="Ubicación"></input>
                                            </div>
                                            <div className="input-field col s12">
                                                <input type="text" onChange={this.capturaDato} className="datepicker" name="fec_ini" id="fec_ini" placeholder="Fecha inicial"></input>
                                            </div>                                            
                                            <div className="input-field col s12">
                                                <input type="text" onChange={this.capturaDato} className="datepicker" name="fec_fin" id="fec_fin" placeholder="Fecha final"></input>
                                            </div>                                                                                        
                                        </div>     
                                        <button type="submit" className="btn light-blue darken-4">
                                            Enviar
                                        </button>                                                                                                                                                          
                                    </form>
                                </div>
                            </div>
                        </div>                        
                        <div className="col s7">
                            
                        </div>                        
                    </div>
                </div>
            </div>
        ) 
    }
}

export default App;