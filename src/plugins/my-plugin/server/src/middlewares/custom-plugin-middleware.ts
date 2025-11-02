export default (config, { strapi }) => {
  return async (ctx, next) => {
    console.log('Custom Plugin Middleware Executed');
    await next();
  };
};
