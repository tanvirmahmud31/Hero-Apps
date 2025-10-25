const getStoredApps = () => {
    const storeAppsSTR = localStorage.getItem('installList');
    if (storeAppsSTR) {
        return JSON.parse(storeAppsSTR);
    } else {
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedApps = getStoredApps();

    if (storedApps.includes(id)) {
        return false;
    } else {
        storedApps.push(id);
        localStorage.setItem("installList", JSON.stringify(storedApps));
        return true;
    }
}




const removeFromStoreDB = (id) => {
    let storeAppData = getStoredApps();
    storeAppData = storeAppData.filter(appId => Number(appId) !== Number(id));
    localStorage.setItem("installList", JSON.stringify(storeAppData));
}

export { getStoredApps, addToStoreDB, removeFromStoreDB };
