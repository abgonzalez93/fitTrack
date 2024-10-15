const httpStatus = {
  // 1xx: Informational - Request received, continuing process
  CONTINUE: 100, // The server has received the request headers and the client should proceed to send the request body.
  SWITCHING_PROTOCOLS: 101, // The requester has asked the server to switch protocols and the server has agreed to do so.
  PROCESSING: 102, // A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request.
  EARLY_HINTS: 103, // Used to return some response headers before final HTTP message.

  // 2xx: Success - The action was successfully received, understood, and accepted
  OK: 200, // Standard response for successful HTTP requests.
  CREATED: 201, // The request has been fulfilled, resulting in the creation of a new resource.
  ACCEPTED: 202, // The request has been accepted for processing, but the processing has not been completed.
  NON_AUTHORITATIVE_INFORMATION: 203, // The server is a transforming proxy that received a 200 OK from its origin, but is returning a modified version.
  NO_CONTENT: 204, // The server successfully processed the request, and is not returning any content.
  RESET_CONTENT: 205, // The server successfully processed the request, asks that the requester reset its document view.
  PARTIAL_CONTENT: 206, // The server is delivering only part of the resource due to a range header sent by the client.
  MULTI_STATUS: 207, // The message body that follows is by default an XML message and can contain a number of separate response codes.
  ALREADY_REPORTED: 208, // The members of a DAV binding have already been enumerated in a preceding part of the response.
  IM_USED: 226, // The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations.

  // 3xx: Redirection - Further action must be taken in order to complete the request
  MULTIPLE_CHOICES: 300, // Indicates multiple options for the resource from which the client may choose.
  MOVED_PERMANENTLY: 301, // This and all future requests should be directed to the given URI.
  FOUND: 302, // Tells the client to look at another URL.
  SEE_OTHER: 303, // The response to the request can be found under another URI using the GET method.
  NOT_MODIFIED: 304, // Indicates that the resource has not been modified since the version specified by the request headers.
  USE_PROXY: 305, // The requested resource is available only through a proxy.
  SWITCH_PROXY: 306, // No longer used. Originally meant "Subsequent requests should use the specified proxy."
  TEMPORARY_REDIRECT: 307, // In this case, the request should be repeated with another URI.
  PERMANENT_REDIRECT: 308, // This and all future requests should be directed to the given URI without changing the HTTP method.

  // 4xx: Client Error - The request contains bad syntax or cannot be fulfilled
  BAD_REQUEST: 400, // The server cannot or will not process the request due to an apparent client error.
  UNAUTHORIZED: 401, // Authentication is required and has failed or has not yet been provided.
  PAYMENT_REQUIRED: 402, // Reserved for future use.
  FORBIDDEN: 403, // The server is refusing action due to insufficient permissions.
  NOT_FOUND: 404, // The requested resource could not be found.
  METHOD_NOT_ALLOWED: 405, // A request method is not supported for the requested resource.
  NOT_ACCEPTABLE: 406, // The requested resource is capable of generating only content not acceptable according to the Accept headers.
  REQUEST_TIMEOUT: 408, // The server timed out waiting for the request.
  CONFLICT: 409, // Indicates that the request could not be processed due to conflict in the current state of the resource.
  GONE: 410, // Indicates that the resource is no longer available and will not be available again.
  LENGTH_REQUIRED: 411, // The request did not specify the length of its content.
  PRECONDITION_FAILED: 412, // The server does not meet one of the preconditions that the requester put on the request header fields.
  PAYLOAD_TOO_LARGE: 413, // The request is larger than the server is willing or able to process.
  URI_TOO_LONG: 414, // The URI provided was too long for the server to process.
  UNSUPPORTED_MEDIA_TYPE: 415, // The request entity has a media type which the server or resource does not support.
  RANGE_NOT_SATISFIABLE: 416, // The client has asked for a portion of the file, but the server cannot supply that portion.
  EXPECTATION_FAILED: 417, // The server cannot meet the requirements of the Expect request-header field.
  MISDIRECTED_REQUEST: 421, // The request was directed at a server that is not able to produce a response.

  // 5xx: Server Error - The server failed to fulfill an apparently valid request
  INTERNAL_SERVER_ERROR: 500, // The server encountered an unexpected condition that prevented it from fulfilling the request.
  NOT_IMPLEMENTED: 501, // The server does not support the functionality required to fulfill the request.
  BAD_GATEWAY: 502, // The server received an invalid response from an upstream server.
  SERVICE_UNAVAILABLE: 503, // The server is currently unable to handle the request due to temporary overload or maintenance.
  GATEWAY_TIMEOUT: 504, // The server did not receive a timely response from an upstream server.
  HTTP_VERSION_NOT_SUPPORTED: 505, // The server does not support the HTTP protocol version that was used in the request.
}

export default httpStatus
