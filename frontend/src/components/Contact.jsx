// import React from "react";

// export default function Pricing() {
//   return (
//     <div className="container py-5">
//       <h1 className="mb-4">Pricing Plans</h1>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card text-center">
//             <div className="card-header bg-primary text-white">Basic</div>
//             <div className="card-body">
//               <h3>$9 / mo</h3>
//               <p>Essential features</p>
//               <button className="btn btn-outline-primary">Choose</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card text-center">
//             <div className="card-header bg-success text-white">Pro</div>
//             <div className="card-body">
//               <h3>$29 / mo</h3>
//               <p>All core features</p>
//               <button className="btn btn-success">Choose</button>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card text-center">
//             <div className="card-header bg-dark text-white">Enterprise</div>
//             <div className="card-body">
//               <h3>$99 / mo</h3>
//               <p>For large teams</p>
//               <button className="btn btn-dark">Choose</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// src/pages/Contact.jsx
import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Contact Us</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="danger">Send Message</Button>
      </Form>
    </Container>
  );
}

export default Contact;
