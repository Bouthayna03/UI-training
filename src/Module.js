import React, { Component } from "react";
{/*function Module(){
    return(
        <div className="module">
                 <li>Programmation web</li>
                 <li>Bases de données avancées</li>
                 <li>Programmation Java</li>
                 
        </div>
    )
   
}*/}
class Module extends Component{
    constructor(props){
        super(props);
        this.state={
            users: []
        }
    }
    componentDidMount(){
        // http request
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => this.setState({users:result}))
    }
    render() {
        
        return(
            
            <div>
                <h1>Resultat de htpp request:</h1>
              {this.state.users.map((user)=>{
                return(
                <div>
                    <table>
                        <tr><th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th></tr>
                        <tr><td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td></tr>
                    </table>
                </div>
                )
              })}
            </div>
        )
    }
}
export default Module;
{/* Ceci est un commentaire en JSX */}