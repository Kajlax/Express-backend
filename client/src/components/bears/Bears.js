import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";

class Bears extends Component {
  constructor() {
    super();
    this.state = {
      bears: []
    };
  }

  componentDidMount() {
    fetch("/api/bears")
      .then(res => res.json())
      .then(bears => this.setState({ bears }, () => bears));
  }

  renderBears = () => {
    return this.state.bears.map(bear => (
      <Grid.Column key={bear.id}>
        <Card
          image={bear.image}
          header={bear.name}
          meta={bear.nameLatin}
          description={bear.description}
          extra={bear.kingdom}
        />
      </Grid.Column>
    ));
  };

  render() {
    return (
      <Grid columns={4} stackable>
        {this.renderBears()}
      </Grid>
    );
  }
}

export default Bears;
