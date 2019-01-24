import React, { Component } from 'react';
import get from 'utils/get';

class ContainerBase extends Component {
  state = {
    view: null,
    model: null,
    error: null
  };

  view = 'Undefined';

  redirect = f => f;
  beforeModel = f => f;
  model = f => f;
  afterModel = f => f;
  activate = f => f;

  reloadModel = () => {
    this.runHooks().then(model => {
      this.activate(model);
      this.setState(prevState => ({ ...prevState, model }));
    });
  };

  runHooks = () => {
    return new Promise(async resolve => {
      let model;
      try {
        await this.beforeModel();
        model = await this.model();
        await this.afterModel(model);
        if (model) model.isError = false;
        else model = { isError: false };
      } catch (error) {
        model = { isError: true, error };
      }
      resolve(model);
    });
  };

  async componentDidMount() {
    this.redirect();
    const [{ default: View }, model] = await Promise.all([
      this.view,
      this.runHooks()
    ]);
    this.activate(model);
    this.setState({ view: View, model });
  }

  async componentWillReceiveProps(nextProps) {
    if (
      get(this, 'props.location.pathname') !==
      get(nextProps, 'location.pathname')
    ) {
      this.redirect();
      const [{ default: View }, model] = await Promise.all([
        this.view,
        this.runHooks()
      ]);
      this.activate(model);
      this.setState({ view: View, model });
    }
  }

  render() {
    const { view: View, model } = this.state;

    return (
      <main className="container">
        {View ? <View model={model} {...this.props} {...this.state} /> : null}
      </main>
    );
  }
}

export default ContainerBase;
