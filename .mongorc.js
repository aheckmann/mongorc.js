// beautify the printed result sets
DBQuery.prototype._prettyShell = true
DBQuery.prototype.ugly = function () {
  this._prettyShell = false;
  return this
}

// always display the db name in the prompt
prompt = function () {
  var res = rs.status();
  if (!res || res.errmsg) {
    // not in a replica set
    var status = db.serverStatus();
    return status.process + "|" + status.host + "|" + db + "> ";
  }

  return replsetPrompt();
}

/**
 * Creates a prompt string for replSets
 *
 * @return {String}
 */

function replsetPrompt () {
  var status;
  var admin = db.getSiblingDB("admin");
  var info = admin.runCommand({ replSetGetStatus: 1, forShell: 1});

  if (info.ok) {
    var state = "";
    // do we need this?
    info.members.some(function (member) {
      if (member.self) {
        state = member.stateStr;
        return true;
      }
    });
    status = info.set + ":" + (state || info.myState);
  } else if (info.info && info.info.length < 20) {
    // < 20 seems like a hack ??
    status = info.info;
  }

  return status + "|" + db + "> "
}

