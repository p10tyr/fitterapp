import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class SingleJobsPage extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>Single Job</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name.item : "This is the Single Job"}</Text>
				</Content>
			</Container>
		);
	}
}

export default SingleJobsPage;