var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
// document.write(utc);
document.getElementById('rDate').value= utc;