
function hitungCouplingFactor() {
    let p1 = parseFloat(document.getElementById("couplingFactorP1").value);
    let p4 = parseFloat(document.getElementById("couplingFactorP4").value);
    let cf = -10 * Math.log10(p4 / p1);
    console.log(cf);
    document.getElementById("resultCouplingFactor").value = cf.toFixed(3) + ' dB';
}

function hitungDirectivity() {
    let p3 = parseFloat(document.getElementById("directivityP3").value);
    let p4 = parseFloat(document.getElementById("directivityP4").value);
    let dt = -10 * Math.log10(p3 / p4);
    console.log(dt);
    document.getElementById("resultDirectivity").value = dt.toFixed(3) + ' dB';
}

function hitungIsolation() {
    let p1 = parseFloat(document.getElementById("isolationP1").value);
    let p3 = parseFloat(document.getElementById("isolationP3").value);
    let is = -10 * Math.log10(p1 / p3);
    console.log(is);
    document.getElementById("resultIsolation").value = is.toFixed(3) + ' dB';
}

function hitungCouplingLoss() {
    let p1 = parseFloat(document.getElementById("couplingLossP1").value);
    let p4 = parseFloat(document.getElementById("couplingLossP4").value);
    let cl = -10 * Math.log10(1 - p4/p1);
    document.getElementById("resultCouplingLoss").value = cl.toFixed(3) + ' dB';
}

function hitungInsertionLoss() {
    let p1 = parseFloat(document.getElementById("insertionLossP1").value);
    let p2 = parseFloat(document.getElementById("insertionLossP2").value);
    let p3 = parseFloat(document.getElementById("insertionLossP3").value);
    let p4 = parseFloat(document.getElementById("insertionLossP4").value);
    let il = -10 * Math.log10((p2+p3+p4)/p1);

    document.getElementById("resultInsertionLoss").value = il.toFixed(3) + ' dB';
}