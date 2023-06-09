import { createBrowserRouter, redirect } from "react-router-dom";
import Index from "./Index";
import Main from "../layouts/Main";
import SingIn from "./SingIn";
import Resgister from "./Resgister";
import FormNewMangas from "./FormNewMangas";
import AuthorForm from "./AuthorForm.jsx";
import ChapterForm from "./ChapterForm";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/index", element: <Index /> },
      { path: "/home", element: <Index /> },
      { path: "/singin", element: <SingIn />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))    
         return (user) &&  redirect('/')
      } },
      { path: "/register", element: <Resgister />, loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
         return (user) &&  redirect('/')
      } },
      { path: "/manga-form", element: <FormNewMangas /> ,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
         return ( user.role === 0 || user.role === 3) &&  redirect('/')
      }  },
      { path: "/author-form", element: <AuthorForm />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
         return (user.role === 1 || user.role === 2 || user.role === 3  ) &&  redirect('/')
      } },
      { path: "/:manga_id/chapter-form",element: <ChapterForm />,loader: ()=>{
        let user = JSON.parse(localStorage.getItem('user'))
        console.log(user);
         return (user.role === 3 || user.role === 0  ) &&  redirect('/')
      }},
      // NO VA PARA EL GRUPO ORANGE
      // { path: "/cia-form", element: <CompanyForm />,loader: ()=>{
      //   let user = JSON.parse(localStorage.getItem('user'))
      //   console.log(user);
      //    return (user.role === 1 || user.role === 2 || user.role === 3  ) &&  redirect('/')
      // } },
    ]
  },
]);

export default router;
