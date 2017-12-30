import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
/* import $ from 'jquery'; */
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      data : []
    }
  }

  componentDidMount() {
    let ambito = this;
/*     $.ajax({
      url : 'http://localhost:8000/api/marca',
      method : 'get',
      success : function(data){
        
        ambito.setState({
          data : data.data.data
        });
      },
      error : function(error){
        console.log(error);
      }
    }); */

    fetch('https://api.equipolts.org.pe/api/marca').then(function(data){
      return data.json()    
    }).then(function(data){
      ambito.setState({
        data : data.marcas.data
      });
    });

  }

  handleChange = (e) => {
    let data = this.state.data;
    console.log(data);
    this.setState({
      data : data.filter(function(d){
        return e.target.value == d.nombre 
      })
    })
  }
  render() {
    return (
      <div className="App"  style={{ maxWidth: '1000px',  margin : '0 auto'  }}>
        <TextField
          hintText="Buscar Marca"
          style={{ width: '100%' }}
          onChange={this.handleChange }
        />
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Nombre</TableHeaderColumn>
              <TableHeaderColumn>Central</TableHeaderColumn>
              <TableHeaderColumn>Telefono</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
          { this.state.data.map( e => {
            return <TableRow key={ 'marca_' + e.id }  >
              <TableRowColumn>{e.nombre}</TableRowColumn>
              <TableRowColumn>{e.central}</TableRowColumn>
              <TableRowColumn>{e.telefono}</TableRowColumn>
              <TableRowColumn>{e.email}</TableRowColumn>
            </TableRow>;
          }) }        
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
