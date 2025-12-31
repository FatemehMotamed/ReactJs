import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div style={styles.appContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Redux Counter App</h1>
        <p style={styles.subtitle}>Classic Redux (Without Toolkit)</p>
      </header>
      
      <main style={styles.main}>
        <div style={styles.card}>
          <Counter />
        </div>
        
        <div style={styles.infoSection}>
          <h3 style={styles.infoTitle}>How it works:</h3>
          <ul style={styles.infoList}>
            <li>Click <strong>Increment</strong> to increase counter</li>
            <li>Click <strong>Decrement</strong> to decrease counter</li>
            <li>Click <strong>Reset</strong> to set counter to zero</li>
            <li>Use the input to increment by custom amount</li>
          </ul>
        </div>
      </main>
      
      <footer style={styles.footer}>
        <p>Built with React & Redux</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    margin: 0,
    fontSize: '2.5rem',
    fontWeight: '300'
  },
  subtitle: {
    margin: '10px 0 0 0',
    color: '#61dafb',
    fontSize: '1.1rem'
  },
  main: {
    flex: 1,
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '40px'
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '600px'
  },
  infoTitle: {
    color: '#282c34',
    marginTop: 0,
    borderBottom: '2px solid #61dafb',
    paddingBottom: '10px'
  },
  infoList: {
    lineHeight: '1.8',
    color: '#555'
  },
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    marginTop: 'auto'
  }
};

export default App;