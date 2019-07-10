import React, { Component } from 'react';

class ScreenModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible || false,
      visibleComponents: props.visible || false,
    };
  }

  componentDidUpdate(prevProps): void {
    (() => {
      if (this.props.visible === false) return;
      if (prevProps.visible === this.props.visible) return;
      this.setState({ visibleComponents: true });
      setTimeout(() => this.setState({ visible: true }), 200);
    })();

    (() => {
      if (this.props.visible === true) return;
      if (prevProps.visible === this.props.visible) return;
      this.setState({ visible: false });
      setTimeout(() => this.setState({ visibleComponents: false }), 200);
    })();
  }

  renderHeader() {
    if (this.props.hideToolbar) return null;
    return (
      <div className="appbar">
        <div className="toolbar">
          <button onClick={this.props.onPressClose}>
            <i className="fa fa-close fa-3x"></i>
          </button>
        </div>
      </div>
    );
  }

  render() {
    const { visible, visibleComponents } = this.state;
    if (!visibleComponents) return null;
    return (
      <div className={visible ? "modal_overlay" : "modal_overlay__hidden"}>
        {this.renderHeader()}
        {this.props.children}
      </div>
    );
  }
}

export default ScreenModal;
