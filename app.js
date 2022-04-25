var GroceryList = (props) => {

  // why get rid of id? bellow line 12

  <ul>
    { props.todos.map(todo=>
    < GroceryListItem todo={todo} />
    )}
  </ul>

}


class GroceryListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      done : false
    };
  }

  onGroceryListItemClick(){
    this.setState({
      done: !this.state.done
    });
  }

  render(){

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }

    return(
      <li style = {style} onClick ={this.onGroceryListItemClick.bind(this)}> {this.props.todo}</li>
    )
  }

}


var App = () => (
  <div>React Components
    <h2>Grocery List</h2>
    <GroceryList todos={['Bananas', 'Oranges', 'Grapes']}/>
  </div>
);



ReactDOM.render(<App />, document.getElementById("app"));


