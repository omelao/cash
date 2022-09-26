// @require core/cash.ts
// @require core/each.ts

interface Cash {
  scroll ( callback: Function ): this;
}

fn.scroll = function ( this: Cash, callback: ( $: typeof cash ) => any ) {
  this.each(function (i, ele) { ele.addEventListener( 'scroll', callback, { passive: true }); });
};
