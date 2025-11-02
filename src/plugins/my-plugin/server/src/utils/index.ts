// src/plugins/my-plugin/server/src/utils/index.ts
// Strapi Plugin Logic

import type { Core } from '@strapi/strapi';

const registerDocumentMiddleware = (strapi: Core.Strapi) => {
  const middleware = 'plugin::my-plugin.customPluginMiddleware';
  const routesPath = strapi.apis.product.routes.product.routes;
  console.log('routesPath:', routesPath.entries);

  const registerIndex = routesPath.findIndex(
    (route) => route.path === '/products' && route.method === 'GET'
  );

  const registerRoute = routesPath[registerIndex];

  if (registerRoute.config.middlewares === undefined) {
    registerRoute.config.middlewares = [];
  }
  registerRoute.config.middlewares.push(middleware);
};

// POST /content-manager/collection-types/api::product.product/actions/publish?

const registerComponent = (strapi: Core.Strapi) => {
  // console.log(strapi.apis.product.routes.product.routes);
  // const attributes = strapi.contentType('api::special.special').attributes;
  const attributes = strapi.contentType('api::product.product').attributes;
  // console.log('attributes:', attributes);
  // const schema = strapi.contentType('api::category.category')['__schema__'].attributes;
  // console.log('schema:', schema);
};

export { registerDocumentMiddleware, registerComponent };
