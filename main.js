const opentelemetry = require("@opentelemetry/api");

console.log("hi");

const tracer = opentelemetry.trace.getTracer("babynode");

const span = tracer.startSpan("do some stuff");

// blah blah things

span.end();

