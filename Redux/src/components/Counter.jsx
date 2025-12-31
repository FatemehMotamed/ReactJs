import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from '../store/actions';

const Counter = ({ count, increment, decrement, reset, incrementByAmount }) => {
  const [amount, setAmount] = useState(5);
  const [inputError, setInputError] = useState(false);

  const handleIncrementByAmount = () => {
    const numAmount = parseInt(amount);
    
    if (isNaN(numAmount)) {
      setInputError(true);
      setTimeout(() => setInputError(false), 2000);
      return;
    }
    
    incrementByAmount(numAmount);
    setInputError(false);
  };

  const handleInputChange = (e) => {
    setAmount(e.target.value);
    setInputError(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleIncrementByAmount();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>Counter</h2>
        <div style={styles.stateInfo}>
          <span style={styles.stateLabel}>Current State:</span>
          <span style={styles.stateValue}>{count}</span>
        </div>
      </div>

      <div style={styles.display}>
        <div style={styles.countContainer}>
          <span style={styles.countLabel}>Count:</span>
          <span 
            style={{
              ...styles.countValue,
              color: count > 0 ? '#2ecc71' : count < 0 ? '#e74c3c' : '#3498db'
            }}
          >
            {count}
          </span>
        </div>
        
        <div style={styles.countStatus}>
          {count === 0 && (
            <span style={styles.statusNeutral}>Counter is at zero</span>
          )}
          {count > 0 && (
            <span style={styles.statusPositive}>Counter is positive</span>
          )}
          {count < 0 && (
            <span style={styles.statusNegative}>Counter is negative</span>
          )}
        </div>
      </div>

      <div style={styles.controls}>
        <div style={styles.buttonGroup}>
          <button 
            onClick={decrement}
            style={styles.buttonDecrement}
            title="Decrease by 1"
          >
            <span style={styles.buttonIcon}>−</span>
            Decrement
          </button>
          
          <button 
            onClick={reset}
            style={styles.buttonReset}
            title="Reset to zero"
          >
            <span style={styles.buttonIcon}>↺</span>
            Reset
          </button>
          
          <button 
            onClick={increment}
            style={styles.buttonIncrement}
            title="Increase by 1"
          >
            <span style={styles.buttonIcon}>+</span>
            Increment
          </button>
        </div>

        <div style={styles.customControl}>
          <div style={styles.inputGroup}>
            <label htmlFor="amountInput" style={styles.inputLabel}>
              Custom Increment:
            </label>
            <input
              id="amountInput"
              type="number"
              value={amount}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={{
                ...styles.input,
                borderColor: inputError ? '#e74c3c' : '#ddd',
                boxShadow: inputError ? '0 0 0 2px rgba(231, 76, 60, 0.2)' : 'none'
              }}
              placeholder="Enter amount"
            />
            {inputError && (
              <span style={styles.errorText}>Please enter a valid number!</span>
            )}
          </div>
          
          <button 
            onClick={handleIncrementByAmount}
            style={styles.buttonCustom}
            disabled={inputError}
          >
            Add {amount}
          </button>
        </div>
      </div>

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Is Even:</span>
          <span style={styles.statValue}>
            {count % 2 === 0 ? 'Yes' : 'No'}
          </span>
        </div>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Absolute Value:</span>
          <span style={styles.statValue}>{Math.abs(count)}</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '0'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  title: {
    fontSize: '1.8rem',
    color: '#2c3e50',
    margin: 0
  },
  stateInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  stateLabel: {
    fontSize: '0.9rem',
    color: '#7f8c8d'
  },
  stateValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#3498db'
  },
  display: {
    textAlign: 'center',
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #eaeaea'
  },
  countContainer: {
    marginBottom: '15px'
  },
  countLabel: {
    fontSize: '1.1rem',
    color: '#7f8c8d',
    marginRight: '10px'
  },
  countValue: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    fontFamily: "'Courier New', monospace",
    transition: 'color 0.3s ease'
  },
  countStatus: {
    marginTop: '15px'
  },
  statusPositive: {
    color: '#27ae60',
    backgroundColor: '#d5f4e6',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  statusNegative: {
    color: '#c0392b',
    backgroundColor: '#fadbd8',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  statusNeutral: {
    color: '#2980b9',
    backgroundColor: '#d6eaf8',
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500'
  },
  controls: {
    marginBottom: '30px'
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginBottom: '30px'
  },
  buttonDecrement: {
    padding: '12px 25px',
    fontSize: '1rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(231, 76, 60, 0.2)'
  },
  buttonReset: {
    padding: '12px 25px',
    fontSize: '1rem',
    backgroundColor: '#f39c12',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(243, 156, 18, 0.2)'
  },
  buttonIncrement: {
    padding: '12px 25px',
    fontSize: '1rem',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(46, 204, 113, 0.2)'
  },
  buttonCustom: {
    padding: '12px 30px',
    fontSize: '1rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 6px rgba(52, 152, 219, 0.2)',
    width: '100%',
    maxWidth: '200px'
  },
  buttonIcon: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  customControl: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px'
  },
  inputGroup: {
    width: '100%',
    maxWidth: '300px',
    textAlign: 'left'
  },
  inputLabel: {
    display: 'block',
    marginBottom: '8px',
    color: '#2c3e50',
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    fontSize: '1rem',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxSizing: 'border-box',
    transition: 'all 0.2s ease'
  },
  errorText: {
    color: '#e74c3c',
    fontSize: '0.85rem',
    marginTop: '5px',
    display: 'block',
    animation: 'fadeIn 0.3s ease'
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    marginTop: '20px'
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  statLabel: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginBottom: '5px'
  },
  statValue: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2c3e50'
  }
};

// hover effects
Object.assign(styles.buttonDecrement, {
  ':hover': {
    backgroundColor: '#c0392b',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(231, 76, 60, 0.3)'
  },
  ':active': {
    transform: 'translateY(0)'
  }
});

Object.assign(styles.buttonReset, {
  ':hover': {
    backgroundColor: '#d35400',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(243, 156, 18, 0.3)'
  },
  ':active': {
    transform: 'translateY(0)'
  }
});

Object.assign(styles.buttonIncrement, {
  ':hover': {
    backgroundColor: '#27ae60',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(46, 204, 113, 0.3)'
  },
  ':active': {
    transform: 'translateY(0)'
  }
});

Object.assign(styles.buttonCustom, {
  ':hover': {
    backgroundColor: '#2980b9',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(52, 152, 219, 0.3)'
  },
  ':active': {
    transform: 'translateY(0)'
  },
  ':disabled': {
    backgroundColor: '#95a5a6',
    cursor: 'not-allowed',
    transform: 'none',
    boxShadow: 'none'
  }
});

Object.assign(styles.input, {
  ':focus': {
    outline: 'none',
    borderColor: '#3498db',
    boxShadow: '0 0 0 2px rgba(52, 152, 219, 0.2)'
  }
});

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  incrementByAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);