// @require ./cash.ts

cash.when = function( condition ) {
    return new Promise(function(resolve, reject) {
      resolve( condition );

      reject(new Error("…")); // ignored
      setTimeout(() => resolve("…")); // ignored
    });
};
