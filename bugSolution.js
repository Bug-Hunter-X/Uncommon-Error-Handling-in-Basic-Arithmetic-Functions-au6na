function add(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : NaN; //handles non-numeric input
}

function sub(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a - b : NaN;
}

function mul(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a * b : NaN;
}

function div(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  if (b === 0) {
    return Infinity; // Return Infinity for division by zero instead of throwing an error
  }
  return a / b;
}

function mod(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  if (b === 0) {
    return NaN; // Return NaN for modulo by zero instead of throwing an error
  }
  return a % b;
}

function exp(a, b) {
  return typeof a === 'number' && typeof b === 'number' ? a ** b : NaN;
}

function sqrt(a) {
  if (typeof a !== 'number') {
    return NaN; 
  }
  if (a < 0) {
    return NaN; // Return NaN for negative square root instead of throwing an error
  }
  return Math.sqrt(a);
}