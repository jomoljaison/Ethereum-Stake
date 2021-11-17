import React, { Component } from 'react'
import Stake from './Stake'
import Transfer from './Transfer'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canTransfer: false,
        }
      }
    

    render() {
    let dappTokenBalance = parseInt(window.web3.utils.fromWei(this.props.dappTokenBalance, 'Ether'))
    let canTransfer = false
      if(dappTokenBalance > 0) { // Check types
        canTransfer = true
      }
    return (
      <div>
        <Stake 
            daiTokenBalance={this.props.daiTokenBalance}
            dappTokenBalance={this.props.dappTokenBalance}
            stakingBalance={this.props.stakingBalance}
            stakeTokens={this.props.stakeTokens}
            unstakeTokens={this.props.unstakeTokens}
            transferDappTokens={this.props.transferDappTokens}

        />
        {canTransfer &&
            <Transfer 
                dappTokenBalance={this.props.dappTokenBalance}
                transferDappTokens={this.props.transferDappTokens}
            />
           // <button
            // type="submit"
            // className="btn btn-link btn-block btn-sm"
            // onClick={(event) => {
            // event.preventDefault()
            // this.props.state.transfering = true
            // }}>
            // Transfer tokens...
            // </button>
        }
      </div>
    );
  }
}

export default Main;
