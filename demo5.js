class Football extends React.Component {
  shoot = () => {
    alert(this);
  }
  //this keyword refers to the component object

render() {
  return (
    <button onClick={this.shoot}>Take the Shot!</button>
  );
}
}
ReactDOM.render(<Football />, document.getElementById('root'));
