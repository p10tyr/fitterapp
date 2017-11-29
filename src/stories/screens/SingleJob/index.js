import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class SingleJob extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>#JOB NAME</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>
              {this.props.list.Customer.Name }
          </Text>
          <Text>
              {this.props.list.Customer.EmailAddress }
          </Text>
          <Text>
              {this.props.list.Customer.Postcode }
          </Text>
          <Text>
              {this.props.list.Customer.LatLng }
          </Text>
          <Text>
              {this.props.list.Customer.Address }
          </Text>

          
        </Content>
      </Container>
    );
  }
}

export default SingleJob;
