import React, { Component } from 'react';

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prevDate: new Date(Date.now() - 1000),
			date: new Date()
		};
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		/*
		this.setState({
			date: new Date()
		});
		*/
		this.setState((prevState, props) => ({
			prevDate: prevState.date,
			date: new Date()
		}));
	}

	render() {
		return (
			<div className="Clock">
				<h4>one second ago</h4>
					{this.state.prevDate.toLocaleTimeString()}
				<h4>current time</h4>
				{this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}

export default Clock;
