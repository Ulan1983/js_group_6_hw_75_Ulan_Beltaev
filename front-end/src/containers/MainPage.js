import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {Button, Input} from "reactstrap";

import {fetchDecode, fetchEncode, inputVal} from "../store/actions";


class MainPage extends Component {

	render() {
		return (
			<Fragment>
				<Input
					type="textarea"
					name="decode"
					placeholder='Decoded message'
					value={this.props.decode}
					onChange={this.props.inputVal}
					style={{resize: 'none'}}
				/>
				<Input
					type="password"
					name="password"
					placeholder='Password'
					value={this.props.password}
					onChange={this.props.inputVal}
					style={{marginTop: '10px'}}
				/>
					<div style={{marginTop: '10px'}}>
						<Button
							onClick={() => this.props.fetchEncode({password: this.props.password, message: this.props.decode})}
							style={{fontSize: '20px'}}
						>
							&dArr;
						</Button>
						<Button
							onClick={() => this.props.fetchDecode({password: this.props.password, message: this.props.encode})}
							style={{marginLeft: '10px', fontSize: '20px'}}
						>
							&uArr;
						</Button>
					</div>
				<Input
					type="textarea"
					name="encode"
					placeholder='Encoded message'
					value={this.props.encode}
					onChange={this.props.inputVal}
					style={{marginTop: '10px', resize: 'none'}}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = state => ({
	encode: state.encode,
	decode: state.decode,
	password: state.password,
	error: state.error
});

const mapDispatchToProps = dispatch => ({
	fetchEncode: data => dispatch(fetchEncode(data)),
	fetchDecode: data => dispatch(fetchDecode(data)),
	inputVal: event => dispatch(inputVal(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);