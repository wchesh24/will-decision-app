import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
//const onFormSubmit = (e) => {
    //e.preventDefault();
    
    //const option = e.target.elements.option.value;

    //if (option) {
      //  app.options.push(option);
        //e.target.elements.option.value = '';
    //render();
    //};
//};

// <form onSubmit={onFormSubmit}>
//<input type="text" name="option" />
//<button>Add Option</button>
//</form>


//const obj = {
  //  name: 'Vikram',
    //getName() {
      //  return this.name;
    //}
//};


//const getName = obj.getName.bind({name: 'William'});

//console.log(getName());

//import './utils.js'
//import subtract, { square, add } from './utils.js';

//console.log('app.js is running');
//console.log(square(4));
//console.log(add(100, 23));
//console.log(subtract(100, 81));

//import isSenior, { isAdult, canDrink } from './person.js';

//console.log(isAdult(16));
//console.log(canDrink(21));
//console.log(isSenior(65));
