// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Don't use built in Math.sqrt()

function sqrt(x) {
    if (x < 2) {
      return x;
    }
  
    let y = x;
    let z = (y + (x / y)) / 2;
  
    while (Math.abs(y - z) >= 0.00001) {
      y = z;
      z = (y + (x / y)) / 2;
    }
  
    return Math.floor(z);
  }

  sqrt(4) // 2
  sqrt(8) // 2


