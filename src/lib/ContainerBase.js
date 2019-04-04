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

  shouldReloadModel = prevProps => {
    console.log(this.props.pathname);
    console.log(prevProps.pathname);
    return (
      get(prevProps, 'location.pathname') !==
      get(this, 'props.location.pathname')
    );
  };

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
    console.log('i run');
    this.redirect();
    const [{ default: View }, model] = await Promise.all([
      this.view,
      this.runHooks()
    ]);
    this.activate(model);
    this.setState({ view: View, model });
  }

  async componentDidUpdate(prevProps) {
    if (this.shouldReloadModel(prevProps)) {
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

    return View ? <View model={model} {...this.props} {...this.state} /> : null;
  }
}

export default ContainerBase;
