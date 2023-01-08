import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/PublicRouter/PublicRouter';

function App() {
  return (
    <div className="max-w-screen-3xl mx-auto shadow-lg rounded-xl">
      <div className="max-w-screen-2xl bg-gray mx-auto shadow-lg rounded-xl">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
