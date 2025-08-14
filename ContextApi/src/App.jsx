// src/App.jsx
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <UserContextProvider>
      <div className='flex flex-col items-center justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-4'>
        <h1 className='text-4xl font-bold text-white mb-10 bg-red-400 px-6 py-3 rounded shadow'>
          Login or Logout
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
