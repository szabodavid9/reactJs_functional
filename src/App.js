import React, { Component } from 'react';
//import logo from './logo.svg';


class App extends Component {


// the push method mutates the array it's called on
  example1 = () => {
    const x = [1, 2];
    console.log( x ); // [1, 2]
    
    x.push( 3 );
    console.log( x ); // [1, 2, 3]
  }

  example2_1 = () => {
    const numbers = [1, 2, 3];
    
    for ( let i = 0; i < numbers.length; i++ ) {
      console.log( numbers[i] );
    }
  }

  example2_2 = () => {
    const numbers = [1, 2, 3];
    
    const print = function ( input ) {
      console.log( input );
    };
    
    numbers.forEach( print );
  }

  example3 = () => {
    const add = function ( x, y ) {
      return x + y;	
    };
    
    const square = function ( x ) {
      return x * x;
    };
    
    const composeTwo = function ( f, g ) {
      return function ( x, y ) {
        return g( f ( x, y ) );	
      };
    };
    
    const addThenSquare = composeTwo( add, square );
    console.log(addThenSquare(2,3));
  }

  example4 = () => {
    const factorial = function ( n, base ) {
      if ( n === 0 ) {
        return base;
      }
      base *= n;
      return factorial( n - 1, base );
    };
    
    console.log(factorial( 10, 1 )); // 3628800
  }

  

  render() {
    
    return (
      <div className="App">
          <div>
            <button onClick={this.example1}> Example 1 </button>
          </div>
          <div>
            <button onClick={this.example2_1}> Example 2.1 </button>
            <button onClick={this.example2_2}> Example 2.2 </button>
          </div>
          <div>
            <button onClick={this.example3}> Example 3  </button>
          </div>
          <div>
            <button onClick={this.example4}> Example 4  </button>
          </div>
          <div>
            <button onClick={() => { console.log('This is a lambda function')} }> Example 5  </button>
          </div>
      </div>
    );
  }
}

export default App;
