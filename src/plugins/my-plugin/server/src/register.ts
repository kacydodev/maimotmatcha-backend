import type { Core } from '@strapi/strapi';
import { registerComponent, registerDocumentMiddleware } from './utils';

const register = ({ strapi }: { strapi: Core.Strapi }) => {
  registerDocumentMiddleware(strapi);
  registerComponent(strapi);
};

export default register;
