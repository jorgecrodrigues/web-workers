// Worker global scope, this is the global scope of the worker
// Self 'simply' refers to the global scope of the worker

console.log("%cWorker is running", "font-size: 20px; color: green;");

console.log("Worker this is: ", this);

self.addEventListener(
  "message",
  function (e) {
    console.log("Message received from main script: ", e.data);
    var workerResult = "Result: " + e.data.x * e.data.y;

    const t = this.setTimeout(() => {
      console.log("Timeout is: ", t);

      console.log("Posting message back to main script: ", workerResult);
      self.postMessage(workerResult);

      this.clearTimeout(t);
    }, 1000);
  },
  false
);
