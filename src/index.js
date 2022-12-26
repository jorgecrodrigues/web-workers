(function (window) {
  console.log("Window is: ", window);

  if (window.Worker) {
    console.log(
      "%cWeb Workers are supported",
      "font-size: 20px; color: green;"
    );

    var myWorker = new Worker("worker.js");

    console.log("Worker is: ", myWorker);

    myWorker.addEventListener("message", function (e) {
      console.log("Message received from worker: ", e.data);

      myWorker.terminate();
    });

    myWorker.addEventListener("error", function (e) {
      console.error("Error received from worker: ", e?.message);
    });

    myWorker.postMessage({ x: 165, y: 2456 });
  }
})(typeof window !== "undefined" ? window : global);
