import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //console.log(web3.version);
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { manager: '' };
  // }
  // state can be initialised in the following manner as well

  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    accounts: [],
    message: ''
  }
  async componentDidMount() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      const accounts = await web3.eth.getAccounts();
      this.setState({ manager, players, balance, accounts });
  }

  onSubmit = async (event) => {
    event.preventDefault(); // To stop form from auto submitting itself like in HTML
    this.setState({ message: 'Transaction waiting for confirmation.' });
    await lottery.methods.enter().send({
      from: this.state.accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether')
    });
    this.setState({ message: 'Success! You have been entered into the lottery, good luck!' });
  };

  async currentAccounts() {
    const accounts = await web3.eth.getAccounts();
    return accounts;
  }
render() {
    return (
      <div>
        <div>
          <h2>Lottery contract at: {lottery.options.address}</h2>
          <p>Your account is: {this.state.accounts[0]}</p>
          <p>Contract created by: {this.state.manager}</p>
          <p>Number of entries: {this.state.players.length}</p>
          <p>Contract balance: {web3.utils.fromWei(this.state.balance, 'ether')} ether</p>
        </div>

        <hr />

        <div>
          <h4>Try your luck!</h4>
          <form onSubmit={this.onSubmit}>
            <label>Amount of ether you would like to wager: </label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <button>Wager!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
