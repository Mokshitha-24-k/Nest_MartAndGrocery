import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import router from "./Routing"

function App() {
  // return (
  //   <div className="App">
  //     <Layout />
      
  //   </div>
  // );

  return <RouterProvider router={router} />;
}

export default App;

