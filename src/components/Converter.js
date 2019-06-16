import React, { Component } from "react";

class Converter extends Component {
  state = {
    currencies: [
    "EUR", 
    "BGN",
    "NZD",
    "ILS",
    "RUB",
    "CAD",
    "USD",
    "PHP",
    "CHF",
    "ZAR",
    "AUD",
    "JPY",
    "TRY",
    "HKD",
    "MYR",
    "THB",
    "HRK",
    "NOK",
    "IDR",
    "DKK",
    "CZK",
    "HUF",
    "GBP",
    "MXN",
    "KRW",
    "ISK",
    "SGD",
    "BRL",
    "PLN",
    "INR",
    "RON",
    "CNY",
    "SEK",
    ],
    base: "SEK",
    amount: "",
    convertTo: "USD",
    result: "",
    date: "",
    data: [],
    support: true,
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      this.setState({
        noSupport: false
      })
      console.log(this.state.noSupport)
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const result = (data.rates[this.props.currency] * amount).toFixed(4);
          this.setState({
            result,
            date,
            noSupport: true,
          });
        });
    }
  };



  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.props.currency;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  render() {
    const { currencies, base, amount, result, date } = this.state;
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h2>
                {amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {this.props.currency ? this.props.currency : 'USD'}
              </h2>
              <p>As of {amount === "" ? "/ / /" : date === null ? "" : date}</p>
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={amount === isNaN ? 0 : amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      disabled={true}
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={this.props.currency}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Converter;
