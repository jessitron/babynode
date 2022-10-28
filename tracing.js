/* tracing.js */

// Require dependencies
const opentelemetry = require("@opentelemetry/sdk-node");
const { diag, DiagConsoleLogger, DiagLogLevel } = require("@opentelemetry/api");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { Resource } = require("@opentelemetry/resources");
const {
  SemanticResourceAttributes,
} = require("@opentelemetry/semantic-conventions");

// For troubleshooting, set the log level to DiagLogLevel.DEBUG
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.INFO);
console.log("tracing please");

const resource = Resource.default().merge(
  new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "service-name-here",
    [SemanticResourceAttributes.SERVICE_VERSION]: "0.1.0",
  })
);

const provider = new NodeTracerProvider({
  resource: resource,
});
const exporter = new opentelemetry.tracing.ConsoleSpanExporter();
const processor = new opentelemetry.tracing.SimpleSpanProcessor(exporter);
provider.addSpanProcessor(processor);
provider.register();
