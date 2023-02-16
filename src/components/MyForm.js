// import React from "react"
import React from 'react';
import { Form, Button, Container } from 'reactstrap';

const MyForm = () => {
  console.log("iam from myfrom");
  return (         
        <Container>
        <Form >
          <input type="text" placeholder='user name'/> 
          <input type="text" placeholder='password'/> 
          <Button variant="primary" type="submit">
                Submit
          </Button>
        </Form>
      </Container>     
  )
  
}
export default MyForm;



// function myForm() {


//     <h1>dede<h1/>;
//     return 
    
// }

// export default myForm


//************************************************************* */
// const MyForm = () => {
//     const [formData, setFormData] = useState({
//       name: '',
//       email: '',
//       message: '',
//     });
  
//     const handleInputChange = (event) => {
//       setFormData({
//         ...formData,
//         [event.target.name]: event.target.value,
//       });
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log(formData);
//     };
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleInputChange}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   };

  //************************************************************* */

//   class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         name: '',
//         email: '',
//         message: '',
//       };
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.handleInputChange = this.handleInputChange.bind(this);
//     }
  
//     handleSubmit(event) {
//       event.preventDefault();
//       console.log(this.state);
//     }
  
//     handleInputChange(event) {
//       this.setState({
//         [event.target.name]: event.target.value,
//       });
//     }
  
//     render() {
//       return (
//         <Container>
//           <Row className="justify-content-md-center">
//             <Col md={8}>
//               <Form onSubmit={this.handleSubmit}>
//                 <Form.Group controlId="formBasicName">
//                   <Form.Label>Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.handleInputChange}
//                   />
//                 </Form.Group>
  
//                 <Form.Group controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={this.state.email}
//                     onChange={this.handleInputChange}
//                   />
//                 </Form.Group>
  
//                 <Form.Group controlId="formBasicMessage">
//                   <Form.Label>Message</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows="3"
//                     name="message"
//                     value={this.state.message}
//                     onChange={this.handleInputChange}
//                   />
//                 </Form.Group>
  
//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </Form>
//             </Col>
//           </Row>
//         </Container>
//       );
//     }
//   }

