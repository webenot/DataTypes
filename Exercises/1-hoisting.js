'use strict';

const fn = () => {
  /* Test Errors, but works - print { a: undefined }
  console.log({ a });
  var a = 1;
  */
  const a = 1;
  console.log({ a });
};

module.exports = { fn };
