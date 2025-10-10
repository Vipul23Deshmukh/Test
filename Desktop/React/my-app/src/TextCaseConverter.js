import React,{Component} from "react";

class TextConverter extends Component{
    constructor(props)
    {
       super(props);
       this.state={
             text:''
       };
    }
    handleChange=(event)=>{
        this.setState({text: event.target.value});
    };

    handleUpperCase=()=>
    {
        console.log(this.state.text.toUpperCase());
    };
    handleLowerCase=()=>
    {
        console.log(this.state.text.toLowerCase());
    };

    render(){
        return(
            <div style={{ padding: '20px' }}>
            <input type="text"
                   placeholder="Enter text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    />

              <button onClick={this.handleUpperCase}>UpperCase</button>
              <button onClick={this.handleLowerCase}>Lowercase</button>      
            </div>
        );
    }
    
}
export default TextConverter;