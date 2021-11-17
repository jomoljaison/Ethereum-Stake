import React, { Component } from 'react'
import tokenLogo from '../token-logo.png'

class Transfer extends Component {

  render() {
    return (
      <div id="content" className="mt-3">
        <div className="card mb-4" >

          <div className="card-body">

            <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                let amount
                amount = this.tokensToTransfer.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                let inputAddress = this.receiver.value.toString()
                this.props.transferDappTokens(amount, inputAddress)
              }}>
              <div>
                <label className="float-rigth"><b>Transfer rewarded tokens</b></label>
                <span className="float-right text-muted">
                  Balance: {window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether')}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.tokensToTransfer = input }}
                  className="form-control form-control-lg"
                  placeholder="0"
                  required />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <img src={tokenLogo} height='32' alt=""/>
                    &nbsp;&nbsp;&nbsp; AsaT
                  </div>
                </div>
              </div>
              <div className="input-group mb-4">
                <input
                  type="text"
                  ref={(input) => { this.receiver = input }}
                  className="form-control form-control-lg"
                  placeholder="To address..."
                  required />
              </div>
              <button type="submit" className="btn btn-primary btn-block btn-lg">Transfer</button>
            </form>
          </div>
        </div>

      </div>
    );
  }
}

export default Transfer;
