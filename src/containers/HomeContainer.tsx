import React, { Component } from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { RouterProps } from "react-router";
import AppState from "../redux/AppState";
import { connect } from "react-redux";

interface Props extends RouterProps {}
interface State {}

class HomeContainer extends Component<Props, State> {
	public render() {
		return <HomeScreen history={this.props.history} />;
	}
}
const mapStateToProps = (state: AppState) => {
	return {};
};
export default connect(mapStateToProps)(HomeContainer);
