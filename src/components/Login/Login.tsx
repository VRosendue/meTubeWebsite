import { Component } from "react";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import AuthService from "../../services/authservice";

// interface RouterProps {
//   history: string;
// }

// type Props = RouteComponentProps<RouterProps>;

// type State = {
//   email: string,
//   password: string,
//   loading: boolean,
//   message: string
// };


// export default class Login extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);
//     this.handleLogin = this.handleLogin.bind(this);
//   }




//   validationSchema() {
//     return Yup.object().shape({
//       email: [Yup Schema],
//       password: [Yup Schema],
//     });
//   }

//   handleLogin(formValue: {email: string, password: string}) {
//     const {email, password} = formValue;
//   }

//   render() {

//     const initialValues = {
//       email: "",
//       password: "",
//     };

//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={this.validationSchema}
//         onSubmit={this.handleLogin}>
//           <Form>
//             <div>
//               <label htmlFor="email">Password</label>
//               <Field name="email" type="text" />
//               <ErrorMessage name="email" component="div" />
//             </div>

//             <div>
//               <label htmlFor="password">Password</label>
//               <Field name="password" type="password" />
//               <ErrorMessage name="password" component="div" />
//             </div>

//             <div>
//               <button type="submit" disabled={loading}>
//                 Login
//               </button>
//             </div>
//           </Form>
//         </Formik>
//     );
//   }

// }