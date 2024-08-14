import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './Navbar';
import Home from './Home';
import Add from './Add';
import Delete from './Delete';
import Update from './update';

function App() {

  const route= createBrowserRouter([{
    path:"/", element:<Navbar />,
    children:[
      {index:true, element:<Home />},
      {path:"/add", element:<Add />},
      {path:"/delete/:id", element:<Delete />},
      {path:"/update/:id", element:<Update />},
    ]
  }])
  return (
    <Provider store={store}>
    <RouterProvider router={route} />
    </Provider>
  );
}

export default App;
