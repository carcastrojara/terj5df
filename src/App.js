import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guests: [],
      firstName: '',
      lastName: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
  
    this.setState({
      [id]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newGuest = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };
    const guestsCopy = [...this.state.guests];
    guestsCopy.push(newGuest);
    this.setState({
      guests: guestsCopy,
      firstName: '',
      lastName: '',
    });
  }
  render() {
    const guestRows = this.state.guests.map((guest, index) => (
      <tr key={index}>
        <td>{guest.firstName}</td>
        <td>{guest.lastName}</td>
      </tr>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form  onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" id="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" id="lastName"  value={this.state.lastName} onChange={this.handleInputChange}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
              {guestRows}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App
