const indexPath = (pathname) => {
  if (pathname === "/") return "/index.html";
  if (pathname.endsWith("/")) return `${pathname}index.html`;
  return `${pathname}/index.html`;
};

const worker = {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);

    if (
      response.status === 404 &&
      (request.method === "GET" || request.method === "HEAD") &&
      !url.pathname.split("/").pop()?.includes(".")
    ) {
      url.pathname = indexPath(url.pathname);
      response = await env.ASSETS.fetch(new Request(url, request));
    }

    if (response.status === 404) {
      url.pathname = "/404.html";
      return env.ASSETS.fetch(new Request(url, request));
    }

    return response;
  }
};

export default worker;
