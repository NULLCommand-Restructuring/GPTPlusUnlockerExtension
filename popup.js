async function sendMessage() {
    let unlockButton = document.getElementById('unlockButton');
    unlockButton.textContent = 'Processing...';
    unlockButton.disabled = true;

    let email = document.getElementById('emailInput').value;
    let continuousUnlock = document.getElementById('i').checked;
    chrome.runtime.sendMessage({
        type: 'unlock',
        data: {
            email: email,
            continuousUnlock: continuousUnlock
        }
    }).then(response => {
        if (response.message === '1') {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                var currentTab = tabs[0];
                setTimeout(function () {
                    chrome.tabs.reload(currentTab.id);
                }, 1500);
            });
            alert('Unlock successful, please wait for the page to reload!');
        } else if (response.message === '2') {
            alert('Unlock failed, please check your email and try again!');
        } else {
            alert('Unlock failed, please contact OpenFXT to respond to the issue!');
        }
    }).catch(error => {
        alert('Unlock failed, please contact OpenFXT to respond to the issue!');
    }).finally(() => {
        unlockButton.textContent = 'Unlock';
        unlockButton.disabled = false;
    });
}

document.getElementById('unlockButton').addEventListener('click', sendMessage);
