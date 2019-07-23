import React, {Component} from 'react';

export default class Contents extends Component {
  newContents;
  state = {
    name: null,
    content: null,
    label: null
  };

  componentDidMount() {
    this.changeContents();
  };

  componentDidUpdate(prevProps) {
    if (this.props.contentSelected !== prevProps.contentSelected) {
      this.changeContents();
    }
  };

  changeContents() {
    this.newContents = this.props.contents.filter(({name}) => 
      name === this.props.contentSelected
    );

    this.setState({
      name: this.newContents[0].name,
      content: this.newContents[0].content,
      label: this.newContents[0].label
    });
    
  };

  render() {
    const inside = this.props.hasLabel ?
      <h5>{this.state.label}</h5> : null;

    return(
      <React.Fragment>
        <div
          key={this.state.name}>
          {inside}
          {this.state.content}
        </div>
      </React.Fragment>
    )
  }
};