// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home2 from "../../stories/screens/Home2";
import datas from "./data";
import { fetchList } from "./actions";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class Home2Container extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
		return <Home2 navigation={this.props.navigation} list={this.props.data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.home2Reducer.list,
	isLoading: state.home2Reducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(Home2Container);
