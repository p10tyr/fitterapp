// @flow
import * as React from "react";
import { connect } from "react-redux";
import SingleJob from "../../stories/screens/SingleJob";
import datas from "./data";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class SingleJobContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
		var customData = require('./testdata.json');
		
		// console.log(customData);
		var elem1 = customData.Jobs[0];

		
		 console.log(customData);
		
		 return <SingleJob navigation={this.props.navigation} list={elem1} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.singleJobReducer.list,
	isLoading: state.singleJobReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(SingleJobContainer);
