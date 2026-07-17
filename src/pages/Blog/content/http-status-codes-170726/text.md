When you visit a website or perform an action that interacts with it, your browser sends an HTTP request to the web server. The server responds with data that includes a three-digit number known as an **HTTP status code**. These codes tell the browser how the request was handled -- or what went wrong during the process. Most users only notice them when something breaks, but status codes are one of the fundamental building blocks of how browsers and servers communicate.

<!-- prettier-ignore-start -->
![simplified HTTP request-response cycle diagram](/blog-pictures/blog-http-status-codes-img6.png)
<small>A simplified diagram of the HTTP request-response cycle between a web browser and a server. The browser initiates communication by sending an HTTP request (e.g., GET /page.html) to retrieve a specific resource. The server processes the request and responds with an HTTP response that includes a status code (such as 200 OK, indicating success) along with the requested content (e.g., the /page.html file). This exchange enables the browser to load and display the web page.</small>
<!-- prettier-ignore-end -->

## The Creation of HTTP Status Codes

The story of HTTP status codes begins in the early 1990s, when Tim Berners-Lee and his team at CERN created the HyperText Transfer Protocol (HTTP) to allow computers to exchange documents over the growing internet. The first version, HTTP 0.9, released in 1991, was extremely limited and contained almost no additional information about responses.

As the World Wide Web expanded throughout the 1990s, this simple approach quickly became insufficient. Websites grew more complex, and developers needed a better way for servers to communicate detailed information about what happened during a request. This led to more structured versions of HTTP, including HTTP 1.0 in 1996 and HTTP 1.1 in 1997. These introduced the status code system we still use today.

The three-digit format was chosen because it is compact enough for fast network transmission while still leaving room for future expansion. The first digit indicates the general class of the response, while the second and third digits provide more specific details. This system has proven remarkably stable and continues to work well even with modern HTTP versions like HTTP/2 and HTTP/3.

## How HTTP Status Codes are Organized

All HTTP status codes consist of three digits. Every code falls into one of five broad categories, determined by its first digit:

<div className="table-wrapper">
<table>
  <thead>
    <tr>
      <th>Class</th>
      <th>Category</th>
      <th>Meaning</th>
      <th>Typical Use Case</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1xx</strong></td>
      <td>Informational</td>
      <td>The server has received the request and is still processing it</td>
      <td>Complex or long-running requests</td>
    </tr>
    <tr>
      <td><strong>2xx</strong></td>
      <td>Success</td>
      <td>The request was received, understood, and successfully processed</td>
      <td>Normal loading of web pages and resources</td>
    </tr>
    <tr>
      <td><strong>3xx</strong></td>
      <td>Redirection</td>
      <td>The client needs to take additional action to complete the request</td>
      <td>URL changes and content relocation</td>
    </tr>
    <tr>
      <td><strong>4xx</strong></td>
      <td>Client Error</td>
      <td>There is an error in the client's request</td>
      <td>Incorrect URLs, authentication issues</td>
    </tr>
    <tr>
      <td><strong>5xx</strong></td>
      <td>Server Error</td>
      <td>The server failed to fulfill an apparently valid request</td>
      <td>Server-side failures and overloads</td>
    </tr>
  </tbody>
</table>
</div>

Below are short descriptions of each category, along with practical examples.

### `1xx` Informational

These status codes tell the client that the server has received the request and is still working on it. Most users never see them because browsers handle them automatically in the background.

The best-known example is **100 Continue**. It is used when the client is about to send a large amount of data. Instead of uploading everything at once, the client first checks whether the server is ready to accept the request. If the server responds with **100 Continue**, the upload proceeds. This is especially useful for large files, such as videos or documents with many attachments. Without this mechanism, a user might spend several minutes uploading a file only to discover that the server will reject it due to size limits or another restriction.

### `2xx` Success

A 2xx status code means the request was successful. From the browser's perspective, this is exactly what you want to see.

**200 OK** is the most common response on the internet. It tells the client that everything worked as expected and the requested content is available. Opening a website, loading an image, watching a video, or receiving data from an API -- all of these typically end with a **200 OK** response.

**201 Created** is used when a new resource has been successfully created. This happens when a user creates an account, uploads a new photo, publishes a blog post, places an order in an online store, or creates a new project on a platform like GitHub. Unlike **200 OK**, which usually means something already existed and was retrieved, **201 Created** confirms that something new has been added to the system.

**204 No Content** means the request was successfully processed, but there is nothing to return to the client. It is often used for actions where the outcome is already obvious, such as deleting an item, updating settings, or marking a notification as read.

**206 Partial Content** is used when only part of a file is sent rather than the entire resource. Video platforms rely on it to stream content progressively, allowing users to start watching before the full video has loaded. It is also useful for resuming interrupted downloads, as the client can request only the missing parts.

### `3xx` Redirection

Redirection codes tell the client that it needs to make another request to complete the original one. In most cases, this happens automatically, and the user notices nothing.

**301 Moved Permanently** indicates that the resource has been permanently moved to a new address. For example, if a site changes its domain or moves an article to a different URL, visitors to the old address are automatically redirected to the new one.

**302 Found** and **307 Temporary Redirect** are used when the move is only temporary. A site might use them during maintenance, for a limited-time promotion, or when users need to be briefly directed to another server.

**304 Not Modified** is closely tied to browser caching. Instead of downloading the same file every time, the browser can ask whether its saved copy is still current. If the page, image, or script has not changed, the server responds with **304 Not Modified**, allowing the browser to use the cached version.

### `4xx` Client Error

A 4xx status code means the problem lies with the client's request, not the server. These are the errors people encounter most often while browsing the web.

The most recognizable is **404 Not Found**. It means the server could not locate the requested resource at the given address. This usually happens when a page has been deleted, a link is outdated, or the URL was entered incorrectly. Opening an old article, visiting a removed product page, or following a broken link -- all of these can result in a **404** response.

**400 Bad Request** appears when the server cannot understand the request because it is malformed. This can happen if a form contains incorrect data, an application sends incomplete information, or an API receives a request in the wrong format.

**401 Unauthorized** means authentication is required to access the resource. A user trying to open a private profile without logging in, or an application making a request to an API without a valid token, may receive a **401** response.

**403 Forbidden** is different because the server understands the request but refuses to grant access. This can occur when a user tries to open an admin page without the necessary permissions, access protected files, or view content available only to specific accounts.

**410 Gone** indicates that the resource has been permanently deleted. Unlike **404**, where the server simply does not know where something is, a **410** response tells the client that the content once existed but is no longer available.

**429 Too Many Requests** is used when the client sends too many requests in a short period of time. Websites and APIs rely on it to prevent abuse, such as excessive page refreshing, automated scraping, or applications making thousands of requests at once.

### `5xx` Server Error

Unlike 4xx responses, 5xx status codes mean that the request itself was valid, but something went wrong on the server side.

**500 Internal Server Error** is the most general server-side error. It can appear due to bugs in the software, database problems, incorrect configuration, or unexpected failures. For example, an online store might return a **500** error if its checkout system crashed, or a site might fail to load after a bad update.

<!-- prettier-ignore-start -->
![Google Error 500](/blog-pictures/blog-http-status-codes-img8.webp)
<small>HTTP status code 500 Internal Server Error on the website of one of Google's services. _[Image source](https://support.google.com/programmable-search/thread/32458792/error-500-server-error-account-specific?hl=en)_</small>
<!-- prettier-ignore-end -->

**502 Bad Gateway** occurs when one server receives an invalid response from another server. Modern websites often rely on multiple services working together, so a failure in one part of the system can trigger a **502** response from another server.

**503 Service Unavailable** usually means the server is temporarily unable to handle requests. This can happen during maintenance, when the service is overloaded, or when a sudden influx of visitors creates too much load on the system.

**504 Gateway Timeout** means the server waited too long for a response from another server. For example, a site that depends on an external payment service or database may return **504** if that service takes too long to respond.

<div className="article-side-note">
<h3>As an aside...</h3>
If you want to explore HTTP status codes in a more entertaining way, check out <a href="https://http.cat/" target=_none>HTTP Cats</a>. This website assigns a funny cat image to each status code.

![HTTP Cats screenshot](/blog-pictures/blog-http-status-codes-img7.webp)

For a more detailed explanation of how each HTTP status code works, <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" target=_none>MDN Web Docs</a> provides a complete reference with technical details and examples.

</div>

## Why 404 Became Iconic

**404 Not Found** has become the most famous HTTP status code for a good reason. In the early days of the web, websites were much less stable than they are today. Pages were frequently moved, renamed, or deleted entirely as sites evolved. As a result, broken links became incredibly common. Every time someone clicked on an outdated bookmark or followed a link from an old forum post, they were likely to land on a 404 page.

Over time, **404** evolved into a cultural phenomenon. Web developers started creating creative and humorous custom 404 pages to soften the disappointment. Some even feature funny illustrations or clever jokes:

<!-- prettier-ignore-start -->
![new.studio](/blog-pictures/blog-http-status-codes-img0.webp)
<small>404 Not Found page on the website of the brand design company New Studio. _[Link](https://www.new.studio/404)_</small>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![pixar.com](/blog-pictures/blog-http-status-codes-img1.webp)
<small>404 Not Found page on the website of Pixar Animation Studios. _[Link](https://www.pixar.com/404)_</small>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![starwars.com](/blog-pictures/blog-http-status-codes-img2.webp)
<small>404 Not Found page on the website of Star Wars. _[Link](https://www.starwars.com/404)_</small>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![solodev.com](/blog-pictures/blog-http-status-codes-img3.webp)
<small>404 Not Found page on the website of the developer platform Solodev. _[Link](https://www.solodev.com/404)_</small>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![solodev.com](/blog-pictures/blog-http-status-codes-img4.webp)
<small>404 Not Found page on the website of NASA. _[Link](https://www.nasa.gov/404)_</small>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
![solodev.com](/blog-pictures/blog-http-status-codes-img5.webp)
<small>404 Not Found page on the website of the Japanese music producer Sasuke Haraguchi (I love his stuff btw). _[Link](https://sasukeharaguchi.com/404)_</small>
<!-- prettier-ignore-end -->

## Conclusion

One of the main advantages of HTTP status codes is how much information they convey with just three digits. Even the first digit alone tells browsers and developers what type of response they are dealing with. It is a simple yet effective design that holds up quite well, even when the request comes from a service serving millions of users.

---

### Sources

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Evolution_of_HTTP
- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
- https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- Icons for the HTTP request-response diagram were taken from [flaticon.com](https://www.flaticon.com)
