import React, { Component } from 'react';

class Triangle extends Component {

    state = {
        rolltage: 3,
        triangle: null,
        triFiller: null
    }


    paintNumber = (number) => {
        return " " + number + " ";
    }


    paint = () => {
        this.setState({
            rolltage: (this.state.rolltage < 3) ? this.state.rolltage + 1 : 0
        })
        let triFill = [];
        if (this.state.rolltage === 0 || this.state.rolltage === 2) {
            for (let i = 0; i < Math.floor(this.props.length / 2); i++) {
                triFill.push([]);
            }
            for (let i = 0; i < this.props.length; i++) {
                let rowFill = "";
                for (let j = 0; j < i + 1; j++) {
                    rowFill += (this.props.triangle[i][j] !== undefined) ? "    " + this.props.triangle[i][j] + "     " : "        ";
                }
                triFill.push(rowFill);
            }
            for (let i = 0; i < Math.floor(this.props.length / 2); i++) {
                triFill.push([]);
            }
            if (this.state.rolltage === 2) {
                triFill.reverse();
            }
            this.setState({
                triFiller: triFill
            })
        }
        else if (this.state.rolltage === 1 | 3) {
            let newTri = [];
            for (let i = 0; i < this.props.length * 2 - 1; i++) {
                newTri.push([]);
            }
            let space = 0;
            for (let i = this.props.length - 1; i >= 0; i -= 2) {
                for (let j = 0; j <= i; j++) {
                    newTri[(j * 2) + space].push(this.props.triangle[i][j]);
                }
                for (let j = 0; j <= i - 1; j++) {
                    newTri[(j * 2 + 1) + space].push(this.props.triangle[i - 1][j]);
                }
                space += 2;
            }
            for (let i = 0; i < newTri.length; i++) {
                let rowFill = "";
                let soLe = (i % 2 === 1 && this.state.rolltage === 1) ? "    " : (i % 2 === 0 && this.state.rolltage === 3) ? "    " : '';
                if (this.state.rolltage === 1) {
                    for (let j = 0; j < Math.ceil(this.props.length / 2); j++) {
                        rowFill += (newTri[i][j] > 0) ? soLe + (String)(newTri[i][j]) + "\t" : "\t";
                    }
                } else {
                    for (let j = 0; j < Math.ceil(this.props.length / 2); j++) {
                        rowFill = (newTri[i][j] > 0) ? soLe + (String)(newTri[i][j]) + "\t" + rowFill : "\t" + rowFill;
                    }
                }
                triFill.push(rowFill);
            }
            this.setState({
                triFiller: triFill
            })
        }
    }

    render() {

        const fillTri = (this.state.triFiller != null) ?
            this.state.triFiller.map((row, index) => {
                return <pre key={index}>{row}</pre>
            }) : '';



        return (
            <div className='row text-center'>
                <div className='col-2 offset-5 mt-3'>
                    <button type="button" onClick={this.paint} className="btn btn-secondary btn-block">Update and Roll</button>
                </div>
                <div className='col-12 mt-5'>
                    {fillTri}
                </div>
            </div>
        );
    }
}

export default Triangle;