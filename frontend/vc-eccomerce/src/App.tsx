import { Router , Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/PrivateRoute'
import ErrorBoundary from './contexts/ErrorBoundary'
import ProductForm from './components/ProductForm';
import CategoryForm from './components/CategoryForm';


function App() {

  return (

      <div> 
        <AuthProvider>

          <ErrorBoundary>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />

            
    
          </Route>
          <Route path="/add-product" element={<ProductForm onSubmit={(data) => console.log(data)} />} />
          <Route path ="add-category" element={<CategoryForm />} />
          </Routes>
          </ErrorBoundary>

        </AuthProvider>
      </div> 

  )
}

export default App
