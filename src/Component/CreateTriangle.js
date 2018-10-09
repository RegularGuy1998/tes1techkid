import React, { Component } from 'react';

class CreateTriangle extends Component {
    state = {
        length: 0
    }

    _changeInput = (e) => {
        if (e.target.value < 0) {
            return;
        }
        this.setState({
            length: e.target.value
        })
        this.props.setLength(e.target.value);
    }

    render() {
        return (
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className="input-group mt-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Input Length</span>
                        </div>
                        <input type="number" className="form-control" placeholder="Length..." value={this.state.length} onChange={this._changeInput} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTriangle;