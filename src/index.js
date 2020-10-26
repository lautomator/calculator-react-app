import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




function Console(props) {
    return (
        <div className="display">
            <div id="status"></div>
            <div id="console">{props.output}</div>
        </div>
    );
}

function Key(props) {
    return (
        <div className="key">{props.keyNo}</div>
    );
}

class KeyPad extends React.Component {
    renderKey(val) {
        return (
            <Key keyNo={this.props.keys[val]} />
        );
    }

    render() {
        return (
            <div className="keypad">
                <div className="key-row">
                    {this.renderKey('7')}
                    {this.renderKey('8')}
                    {this.renderKey('9')}
                    {this.renderKey('/')}
                </div>

                <div className="key-row">
                    {this.renderKey('4')}
                    {this.renderKey('5')}
                    {this.renderKey('6')}
                    {this.renderKey('*')}
                </div>

                <div className="key-row">
                    {this.renderKey('1')}
                    {this.renderKey('2')}
                    {this.renderKey('3')}
                    {this.renderKey('-')}
                </div>

                <div className="key-row">
                    {this.renderKey('C')}
                    {this.renderKey('0')}
                    {this.renderKey('.')}
                    {this.renderKey('+')}
                </div>

                <div className="key-row">
                    {this.renderKey('=')}
                    {this.renderKey(' ')}
                    {this.renderKey('M')}
                    {this.renderKey('MR')}
                </div>
            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: 0,
            buffer: 0,
            memory: 0,
            output: 0,
            operator: 0,
            status: ''
        };
        this.keys = Array(20).fill(null);
    }
    render() {
        return (
            <div>
                <Console output={this.state.output} />
                <KeyPad keys={this.keys} />
            </div>
        );
    }
}

// MAIN ==================
function Main() {
    return (
        <div className="container">
            <Calculator />
        </div>
    );
}

// DOM ===================
ReactDOM.render(
    <Main />,
    document.getElementById('root')
);