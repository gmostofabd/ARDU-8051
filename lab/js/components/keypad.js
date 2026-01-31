// js/components/keypad.js
function initKeypad() {
    const container = document.getElementById('peripherals');
    if (!container) return;

    let keypad = document.getElementById('KEYPAD');
    if (!keypad) {
        keypad = document.createElement('div');
        keypad.id = 'KEYPAD';
        keypad.style.display = 'grid';
        keypad.style.gridTemplateColumns = 'repeat(3, 50px)';
        keypad.style.gridGap = '5px';
        container.appendChild(keypad);
    }

    keypad.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        const key = document.createElement('button');
        key.innerText = i;
        key.className = 'sim-btn';
        key.onclick = () => pressKeypad(i);
        keypad.appendChild(key);
    }

    // Add 0 button
    const key0 = document.createElement('button');
    key0.innerText = '0';
    key0.className = 'sim-btn';
    key0.onclick = () => pressKeypad(0);
    keypad.appendChild(key0);
}

function pressKeypad(key) {
    SFR.P2 = key;  // Store value in port 2
    updateSFRPanel();
    console.log(`Keypad pressed: ${key}`);
}

// Simple 4-button keypad
function renderKeypad(){
    for(let i=0;i<4;i++){
        const btn = document.createElement('div');
        btn.className = 'hw-button';
        btn.style.left = `${20 + i*40}px`;
        btn.style.top = `150px`;
        btn.innerText = `${i}`;
        btn.onclick = ()=>alert(`Key ${i} pressed`);
        document.getElementById('board').appendChild(btn);
    }
}

