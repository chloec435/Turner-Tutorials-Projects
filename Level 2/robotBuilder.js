let powerType = null;
let powerLevel = 0, topSpeed = 0, structuralIntegrity = 0;
let scannersOn = false, defensiveSystemsOn = false;

const limits = {
    solar: { power: 10, speed: 10, integrity: 10 },
    hydro: { power: 8, speed: 12, integrity: 10 },
    nuclear: { power: 12, speed: 14, integrity: 4 }
};

function stats(feature, change) {
    if (!powerType) {
        alert("Please select a power type first!");
        return;
    }

    const limit = limits[powerType][feature];

    if (feature === 'power') {
        let newValue = powerLevel + change;
        powerLevel = newValue < 0 ? 0 
            : newValue > limit ? alert(`POWER LEVEL cannot exceed ${limit} for ${powerType.toUpperCase()} power.`) 
            : newValue;
        document.getElementById('power_level').innerText = powerLevel;

    } else if (feature === 'speed') {
        let newValue = topSpeed + change;
        topSpeed = newValue < 0 ? 0 
            : newValue > limit ? alert(`TOP SPEED cannot exceed ${limit} for ${powerType.toUpperCase()} power.`)
            : newValue;
        document.getElementById('top_speed').innerText = topSpeed;

    } else if (feature === 'integrity') {
        let newValue = structuralIntegrity + change;
        structuralIntegrity = newValue < 0 ? 0 
            : newValue > limit ? alert(`STRUCTURAL INTEGRITY cannot exceed ${limit} for ${powerType.toUpperCase()} power.`)
            : newValue;
        document.getElementById('structural_integrity').innerText = structuralIntegrity;
    }
}

function toggle(feature) {
    if (!powerType) {
        alert("Please select a power type first!");
        return;
    }

    if (feature === 'scanners') {
        scannersOn = !scannersOn;
        document.getElementById('_scanners').innerText = scannersOn ? "ON" : "OFF";
    } else if (feature === 'defensive-systems') {
        defensiveSystemsOn = !defensiveSystemsOn;
        document.getElementById('defensive_systems').innerText = defensiveSystemsOn ? "ON" : "OFF";
    }
}

function element(type) {
    powerType = type;
    document.getElementById('power_type').innerText = powerType.toUpperCase();
    powerLimits();
}

function powerLimits() {
    if (powerLevel > limits[powerType].power) powerLevel = limits[powerType].power;
    if (topSpeed > limits[powerType].speed) topSpeed = limits[powerType].speed;
    if (structuralIntegrity > limits[powerType].integrity) structuralIntegrity = limits[powerType].integrity;

    document.getElementById('power_level').innerText = powerLevel;
    document.getElementById('top_speed').innerText = topSpeed;
    document.getElementById('structural_integrity').innerText = structuralIntegrity;
}

function changeChassis(image) {
    document.getElementById('robotImage').src = image;
}

function finalize() {
    const controls = document.querySelectorAll('#controlPanel button, #thumbnails img');
    controls.forEach(control => control.style.display = 'none');
}
