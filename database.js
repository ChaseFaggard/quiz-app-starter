function getRecords(table) {
    var url = "https://api.m3o.com/v1/db/Read";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", "Bearer NWE5NjEwNTItNzJjZS00ZDM3LTllNzgtZmYyYmQyZTAzM2M5");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const data = xhr.responseText
        const obj = JSON.parse(data)
        questions = obj.records
    }};

    var data = `{
        "table": "${table}"
    }`;

    xhr.send(data)
}

function addRecord(table, entries) {
    var url = "https://api.m3o.com/v1/db/Create";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Origin", "https://example.reqbin.com");
    xhr.setRequestHeader("Cookie", "authCookie=my_auth_cookie");
    xhr.setRequestHeader("Authorization", "Bearer NWE5NjEwNTItNzJjZS00ZDM3LTllNzgtZmYyYmQyZTAzM2M5");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

    let entriesToStr = ""
        
    for (const [key, value] of Object.entries(entries)) {
        entriesToStr += `"${key}": "${value}", `
    }
    entriesToStr = entriesToStr.substring(0, entriesToStr.length-2)

    var data = `{
        "record": { ${entriesToStr} },
        "table": "${table}"
    }`;

    xhr.send(data);
}


