import React, { Fragment } from 'react';
import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import FormComponent from './components/form/FormComponent';
import ContentComponent from './components/content/ContentComponent';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import ListAlunos from './components/alunos/ListAlunos';


const router = createBrowserRouter([
  {
    path: "/",   element: <ContentComponent/>,
  },
  {
    path: "/form",   element: <FormComponent/>,
  },
  {
    path: "/list",   element: <ListAlunos/>,
  },

]);

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
        <Fragment>
          <HeaderComponent/>
          <RouterProvider router={router} />
          <FooterComponent/>
        </Fragment>
    </div>
  );
}

export default App;
