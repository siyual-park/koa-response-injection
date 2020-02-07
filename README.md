# Koa Response Injection

**Normal function, promise response inject in koa**.

​    

## Install

```shell
$ npm i koa-response-injection
```

## Spec

### Convert

```js
injecion.inject(ctx, result, options = {statusCode, response});
```

​        

### Response

```js
function Response({ name, where, options }) {
  this.name = name;
  this.where = where;
  this.options = options;
}
```

- This option specifies where the response will be bind to ctx.
- The default value is `body`, which binds the request value to the body of the response.
- Another predefined option is `headers`, which binds the request value to the headers of the response.
-  Another predefined option is `context`, which binds the request value to the ctx.
-  Another predefined option is `cookies`, which binds the request value to the cookies.
- The other option sets the response to `ctx[bind.name]`.

​    
