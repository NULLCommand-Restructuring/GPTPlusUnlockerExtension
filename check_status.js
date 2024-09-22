document.addEventListener('DOMContentLoaded', () => {
    const fetchStatus = (url, successCallback, errorCallback) => {
        fetch(url, { cache: 'no-cache', headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' } })
            .then(response => response.text())
            .then(text => successCallback(text.trim()))
            .catch(error => errorCallback());
    };

    const handleMainStatus = (status) => {
        if (status !== "1") {
            alert(status);
            window.close();
        }
    };

    const handleUpdateStatus = (status) => {
        if (status !== "1") {
            alert("An update has been detected, please visit the OpenFXT platform or the upcoming document below to download the latest version.");
            chrome.tabs.create({ url: status });
            window.close();
        }
    };

    const handleError = (message) => () => {
        alert(message);
        window.close();
    };

    fetchStatus(
        'https://gptplus-openfxt.vercel.app/unlock_server/main_status.txt',
        handleMainStatus,
        handleError("The status server is under maintenance, please try again later. Thank you for your interest and use of OpenFXT's services.")
    );

    fetchStatus(
        'https://gptplus-openfxt.vercel.app/unlock_server/update_status.txt',
        handleUpdateStatus,
        handleError("The update server is under maintenance, please try again later. Thank you for your interest and use of OpenFXT's services.")
    );
});
