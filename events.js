const EventEmitter = require("events");

// Function to initialize EventEmitter
function initializeEmitter() {
  return new EventEmitter();
}

// Function to register an event listener
function registerListener(emitter, eventName, listener) {
  emitter.on(eventName, listener);
}

// Function to emit an event
function emitEvent(emitter, eventName) {
  emitter.emit(eventName);
}

// Create an instance of EventEmitter
const myEmitter = initializeEmitter();

// Create an event listener for 'event'
registerListener(myEmitter, "event", () => {
  console.log("An event occurred!");
});

// Emit the 'event'
emitEvent(myEmitter, "event");
