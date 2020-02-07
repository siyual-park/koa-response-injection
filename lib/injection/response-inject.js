const Response = require('../response/response');
const Error = require('../error/error');

const defaultOptions = {
  statusCode: 200,
  response: new Response({ where: 'body' }),
};

function responseInject(ctx, result, options = {}) {
  const localOptions = Object.assign({}, defaultOptions, options);
  const { statusCode, response } = localOptions;

  ctx.response.status = statusCode;

  if (response.where === 'body') {
    if (response.name) {
      if (typeof ctx.response.body !== 'object') ctx.response.body = {};
      ctx.response.body[response.name] = result;
    } else ctx.response.body = result;
  } else if (response.where === 'headers') {
    if (response.name) ctx.set(response.name, result);
    else ctx.set(result);
  } else if (response.where === 'context') {
    if (response.name) ctx[response.name] = result;
    else Object.assign(ctx, result);
  } else if (response.where === 'cookies') {
    if (response.name) ctx.cookies.set(response.name, result, response.options);
    else throw new Error('The response in the cookie must have a name.');
  } else {
    ctx[options.name] = result;
  }
}

module.exports = responseInject;
