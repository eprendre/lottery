var member = [];

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

for (var index = 1; index <= 200; index++) {
  member.push({ "name": index.pad(3) });
}