import React, { Component } from "react";
class Etudiant extends Component{
    constructor(props){
        super(props);
        this.state={
            nom:"Bouthyy",
            note:18
        }
       

    }
     changer=()=>{
        this.setState({note:15.5});
        this.setState({nom:'Anas'});
    }
    
render(){
    return(
<div className="etud">

    <h1>Hello {this.state.nom} </h1>
    <h1>Tu as eu {this.state.note}</h1>
<button onClick={this.changer}> Changer </button>   
 {/* State is used when we wanna create a variables cuz in recat we can't declare them randomly but instead in a state */}
 {/* An API : intermediaire de communication entre le front-end et le back end  */}
 
</div>
    )
}
}
export default Etudiant;