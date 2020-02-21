class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption =this.handleDeleteOption.bind(this);
        this.state = {
            options:  []
            
            
            
        }
    }
    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);


        if (options) {
            this.setState(() => ({options}));
        }
    } catch (e) {
        // Do nothing at all
    }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    handleDeleteOptions() {
        this.setState(() => ({  options: [] }));
        
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }


    //const onMakeDecision = () =>    {
       // const randomNum = Math.floor(Math.random() * app.options.length);
     //   const option = app.options[randomNum];
   //     alert(option);
 //  }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';

        }
    
        this.setState((prevState) => ({
            options:prevState.options.concat([option])
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';

        return (
         <div>
            <Header subtitle={subtitle} />
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <Options 
            options={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
         </div>
        );
    }
}

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
         
};

Header.defaultProps = {
    title: 'Indecision'
};

//class Header extends React.Component    {
  //  render()    {
    //    return (
      //      <div>
        //        <h1>{this.props.title}</h1>
          //      <h2>{this.props.subtitle}</h2>
            //</div>
        //);
    //}
//}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled = {!props.hasOptions}
            >
            What should I do?
            
            </button>
        </div>
    );
};

//class Action extends React.Component    {

  //  render() {
    //    return (
      //      <div>
        //        <button onClick={this.props.handlePick}
          //      disabled = {!this.props.hasOptions}
            //    >
              //  What should I do?
                
                //</button>
            //</div>
        //);
    //}
//}

const Options = (props) => {
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an aoption to get started!</p> }
                {
                  props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                  ))
                }
            </div>
        );
    
};

//class Options extends React.Component {
  //   render() {
    //    return (
      //      <div>
        //        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          //      {
            //      this.props.options.map((option) => <Option key={option} optionText={option}/>)
              //  }
            //</div>
        //);
    //}
//}

const Option = (props) => {
    return(
        <div>
            {props.optionText}
            <button 
            onClick={() => {
                props.handleDeleteOption(props.optionText);
            }}
            >
            remove
            </button>
         </div>
    );
};

//class Option extends React.Component {
  //  render () {
    //    return (
      //      <div>
        //        {this.props.optionText}
          //  </div>
        //);
    //}
//}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
   handleAddOption(e) {
    e.preventDefault();
    
       const option = e.target.elements.option.value.trim();
       const error = this.props.handleAddOption(option);

       this.setState(() => ({ error }));

       if (!error) {
           e.target.element.option.value = '';
       }

   }
       
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
                </div>
        );
    }
}

//const User = (props) => {
  //  return (
    //    <div>
      //   <p> Name: {props.name}</p>
        // <p> Age: {props.age}</p>
        //</div>
    //);
//};

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