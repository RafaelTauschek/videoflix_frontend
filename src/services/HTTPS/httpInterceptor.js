import request from "superagent";

const customClient = {
  requestInterceptors: [],
  responseInterceptors: [],

  addRequestInterceptor: function (interceptor) {
    this.requestInterceptors.push(interceptor);
  },

  get: async function (url) {
    let req = request.get(url);
    this.requestInterceptors.forEach((interceptor) => {
      req = interceptor(req);
    });

    return req.then((response) => {
      this.responseInterceptors.forEach((interceptor) => {
        response = interceptor(response);
      });
      return response;
    });
  },

  post: async function (url, data) {
    let req = request.post(url);
    this.requestInterceptors.forEach((interceptor) => {
      req = interceptor(req);
    });

    req.send(data);

    return req.then((response) => {
      this.responseInterceptors.forEach((interceptor) => {
        response = interceptor(response);
      });
      return response;
    });
  },

};

customClient.addRequestInterceptor((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req = req.set("Authorization", `token ${token}`);
  }
  return req;
});

export default customClient;
