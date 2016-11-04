'use strict';

var loc;

function get() {
  loc || (loc = window.location);

  return loc.origin || (
    loc.protocol + '//' + loc.hostname + (loc.port !== '' ? ':' + loc.port : '')
  );
}

module.exports = {
  get: get
};
