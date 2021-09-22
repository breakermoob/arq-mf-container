import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@microfrontends/mf-header",
  app: () => System.import("@microfrontends/mf-header"),
  activeWhen: ["/"]
});

registerApplication({
  name: "@microfrontends/mf-gallery",
  app: () => System.import("@microfrontends/mf-gallery"),
  activeWhen: [(location) => {
    const condition = location.pathname === '/' || location.pathname === ''
    return condition
  }],

});
registerApplication({
  name: "@microfrontends/mf-profile",
  app: () => System.import("@microfrontends/mf-profile"),
  activeWhen: ["/perfil"]
});
registerApplication({
  name: "@microfrontends/mf-details",
  app: () => System.import("@microfrontends/mf-details"),
  activeWhen: ["/detalles"]
});

registerApplication({
  name: "@microfrontends/mf-footer",
  app: () => System.import("@microfrontends/mf-footer"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
