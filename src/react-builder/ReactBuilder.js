import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Utils from "./utils";

export default class ReactBuilder {
  static loadComponent(componentName) {
    return lazy(() => {
      if (componentName.startsWith(".") || componentName.startsWith("@")) {
        return import(componentName); // index.js is required in component folder
      }
      return import(`../components/${componentName}`); // index.js is required in component folder
    });
  }

  static renderComponent(config) {
    const Component = ReactBuilder.loadComponent(config.name);

    if (Component) {
      return (
        <Component {...config}>
          {Array.isArray(config.items) &&
            config.items.map(item => ReactBuilder.renderComponent(item))}
        </Component>
      );
    }

    return null;
  }

  static render(config, element) {
    if (!config || Utils.isEmptyObject(config) || !config.name) {
      throw new Error("jsonFile is not a valid type. Please use a JSON file.");
    }

    ReactDOM.render(
      <Suspense fallback={<div />}>
        {ReactBuilder.renderComponent(config)}
      </Suspense>,
      element
    );
  }
}
