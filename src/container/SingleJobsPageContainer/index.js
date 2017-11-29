// @flow
import * as React from "react";
import SingleJobsPage from "../../stories/screens/SingleJobsPage";
export interface Props {
	navigation: any,
}
export interface State {}
export default class BlankPageContainer extends React.Component<Props, State> {
	render() {
		return <SingleJobsPage navigation={this.props.navigation} />;
	}
}