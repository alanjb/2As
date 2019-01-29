import React from 'react';

export default class NameForm extends React.Component {
 constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleSubmit(e) {
   alert('The value is: ' + this.input.value);
   e.preventDefault();
 }

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <label>
         Name:
         <input type="text" ref={(input) => this.input = input} />
       </label>
       <input type="submit" value="Submit" />
     </form>
   );
 }
}
