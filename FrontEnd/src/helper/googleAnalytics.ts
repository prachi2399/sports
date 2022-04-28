declare global {
  interface Window {
    GA_INITIALIZED: any;
  }
}

function InitializeReactGA(ReactGA: any) {
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('UA-223966303-1');
    window.GA_INITIALIZED = true;
  }
}

export default InitializeReactGA;
