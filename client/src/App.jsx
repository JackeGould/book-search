import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

// # App.jsx: 
// Create an Apollo Provider to make every request work with the Apollo server.

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
      </ApolloProvider>
  );
}

export default App;
