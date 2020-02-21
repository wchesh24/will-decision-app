class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state= {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
           return {
               visibility: !prevState.visibility
           };
        });

    }

    render()    {
        return (
        <div>
            <h1>Seattle Mariners</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show Details'}
            </button>
                {this.state.visibility && (
                    <div>
                        <p>Who are the greatest Seattle Mariners of all time?</p>
                    </div>
                )}
        </div>
        );
    }    

};





ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


//let Visibility = false;

//const ToggleVisibility = () =>  {
    //Visibility = !Visibility;
    //render ();
//};

//const render = () => {
    //const jsx = (
        //<div>
          //  <h1>Visibility Toggle</h1>
            
            //<button onClick={ToggleVisibility}> 
                //{Visibility ? 'Hide Details' : 'Show Details'}
            //</button>
            //{Visibility && (
            //    <div>
          //          <p>Hello, Dexter Morgan</p>
              //</div>
      //      )}
    //    //</div>
  //  );


//};
//render();

//Show details need to goes to details when pressed.
//show nothing when closed. show details when open.

