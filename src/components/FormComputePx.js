import React from 'react';
import InfoCard from './InfoCard';

class FormComputePx extends React.Component {
  constructor(props) {
    super();

    this.state = {
      basicItem: props.item,
      valuedefault: 1 / props.item.valuepx,
      pxconverter: props.item.valuepx,
      pxname: "px",
      pxflag: true

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangePx = this.handleChangePx.bind(this);
    this.exchangeRead = this.exchangeRead.bind(this);

  }

  handleChange(event) {
    const { name, value } = event.target

    this.setState({
      pxconverter:
        value * this.state.basicItem.valuepx
    })

  }
  handleChangePx(event) {
    const { name, value } = event.target

    this.setState({
      valuedefault:
        value / this.state.basicItem.valuepx
    })

  }

  exchangeRead(e) {

    this.setState({ pxflag: !this.state.pxflag });
  }


  render() {
    const { basicItem, pxname, pxflag, pxconverter, valuedefault } = this.state;


    return (
      <div >
        <div className="card" id="card-form">
          <div className="row" id="form-calculate">
            <div className="col-md form-group">
              <label>{basicItem.name}</label>
              <input className="form-control"
                name="valuedefault"
                type="number" hidden={!pxflag}
                placeholder={`Values 1${basicItem.name}`}
                onChange={this.handleChange}
              />
              <div hidden={pxflag}>
                <button type="button"
                  class="btn btn-secondary">
                  {valuedefault}
                </button>
              </div>
            </div>
            <div className="col-md">
              <button className="btn btn-outline-primary"
                onClick={this.exchangeRead}
              >
                Exchange
              </button>
            </div>
            <div className="col-md form-group">
              <label>{pxname}</label>
              <input className="form-control"
                name="pxconverter"
                type="number" hidden={pxflag}

                placeholder="Values 1px"
                onChange={this.handleChangePx} />

              <div hidden={!pxflag}>
                <button type="button"
                  class="btn btn-secondary">
                  {pxconverter}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="info" >
          <InfoCard info={basicItem.info} />
        </div>
      </div>
    );
  }
}

export default FormComputePx