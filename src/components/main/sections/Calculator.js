import React, { Component } from 'react';




export class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueIngredients: 10,
      valueEmployees: 5,
      foodCost: 10 * 0.3,
      annualSaving: 5 * 1334 + 3
    }
  }



  _getCurrentValue = (e) => {
    e.preventDefault()
    var rangeI = document.getElementById("formControlRangeIngredients").value;
    var rangeE = document.getElementById("formControlRangeEmployees").value;
    //var range = e.target.value;

    this.setState({
      valueIngredients: rangeI,
      valueEmployees: rangeE,
      foodCost: this.state.valueIngredients * 0.3,
      annualSaving: this.state.valueEmployees * 1334 + this.state.foodCost
  })

  }

  render() {
    return(
      <section className="container calculator">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h2 className="calculator__title">
              See how much you can save with Bellotero.io
            </h2>
            <p className="pt-4">
              With Bellotero.io you save time and money make real-time decisions
              that boost your business and your bottom line. Get less
              wrongfully blocked payments, save time on bookkeeping and no need
              to worry about safety.
            </p>
              <form >
                <div className="form-group">
                  <label htmlFor="formControlRangeIngredients">
                    Monthly ingredient spending
                  </label>
                  <div className="calculator__value">${this.state.valueIngredients}</div>
                  <input
                    type="range"
                    className="form-control-range"
                    id="formControlRangeIngredients"
                    min = {10}
                    max = {100}
                    value= {this.state.valueIngredients}
                    onChange={this._getCurrentValue}>
                  </input>
                </div>
                <div className="form-group">
                  <label htmlFor="formControlRange">
                    Full-time employees that process invoices
                  </label>
                  <div className="calculator__value">{this.state.valueEmployees}</div>
                 <input
                   type="range"
                   className="form-control-range"
                   id="formControlRangeEmployees"
                   min = {1}
                   max = {10}
                   value = {this.state.valueEmployees}
                   onChange={this._getCurrentValue}>
                 </input>
                </div>
              </form>
          </div>
          <div className="col-sm-12 col-md-6 d-flex align-items-end">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <h2>Your Estimated Anual savings</h2>
                <div className="calculator__result">
                  <small>$</small>{this.state.annualSaving}
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <h2>Your Estimated Food cost savings</h2>
                <div className="calculator__result">
                  <small>$</small>{this.state.foodCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
