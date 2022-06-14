import React from 'react';
import './styles.css';

export class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      
    };

    this.getData = this.getData.bind(this);
  }
  getData(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    const { name, age, email } = this.state;
    return (
        <div className="contact">
           <div><div> <label>Name</label></div>
            <input  type="text" value={name} name="name" onChange={this.getData} />
            </div>
           <div> <div><label>age</label></div>
            <input type="text"  value={age}  name="age" onChange={this.getData} />
            </div>
            <div>
            <div><label>Email</label></div>
            <input    type="text"     value={email}  name="email" onChange={this.getData}   />
            </div>
            <div>
            <button onClick={() => { console.log(this.state);  }} >Submit</button>
            </div>
          </div>
    );
  }
}

export default Contacts;