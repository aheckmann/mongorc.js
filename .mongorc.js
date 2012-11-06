// beautify the printed result sets
DBQuery.prototype._prettyShell = true
DBQuery.prototype.ugly = function () {
  this._prettyShell = false;
  return this
}

// always display the db name in the prompt
prompt = function () {
  return db + "> ";
}
