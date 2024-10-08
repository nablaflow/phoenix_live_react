import React from "react"
import { createRoot } from "react-dom/client"

const render = function(root, el, componentClass, additionalProps = {}, previousProps = {}) {
  let props = el.dataset.liveReactProps ? JSON.parse(el.dataset.liveReactProps) : {};
  if (el.dataset.liveReactMerge) {
    props = {...previousProps, ...props, ...additionalProps}
  } else {
    props = {...props, ...additionalProps}
  }
  const reactElement = React.createElement(componentClass, props);
  root.render(reactElement);
  return props;
}

const initLiveReactElement = function(el, additionalProps) {
  const target = el.nextElementSibling;
  const componentClass = Array.prototype.reduce.call(el.dataset.liveReactClass.split('.'), (acc, el) => { return acc[el] }, window);
  const root = createRoot(target);
  render(root, el, componentClass, additionalProps);
  return {root, target: target, componentClass: componentClass};
}

const initLiveReact = function() {
  const elements = document.querySelectorAll('[data-live-react-class]')
  Array.prototype.forEach.call(elements, el => {
    initLiveReactElement(el)
  });
}

const LiveReact = {
  mounted() {
    const { el } = this;
    const pushEvent = this.pushEvent.bind(this);
    const pushEventTo = this.pushEventTo && this.pushEventTo.bind(this);
    const handleEvent = this.handleEvent && this.handleEvent.bind(this);
    const { root, target, componentClass} = initLiveReactElement(el, { pushEvent });
    const props = render(root, el, componentClass, { pushEvent, pushEventTo, handleEvent });
    if (el.dataset.liveReactMerge) this.props = props
    Object.assign(this, { target, componentClass, root});
  },

  updated() {
    const { root, el, target, componentClass } = this;
    const pushEvent = this.pushEvent.bind(this);
    const pushEventTo = this.pushEventTo && this.pushEventTo.bind(this);
    const handleEvent = this.handleEvent;
    const previousProps = this.props;
    const props = render(root, el, componentClass, { pushEvent, pushEventTo }, previousProps);
    if (el.dataset.liveReactMerge) this.props = props
  },

  destroyed() {
    const { root } = this;
    root.unmount();
  }
}

export { LiveReact as default, initLiveReact, initLiveReactElement };
