Folgendes in eine .bat Datei für den Client schreiben:
chrome.exe --user-data-dir="D:/Chrome dev session" --disable-web-security


chrome.exe durch pfad zu chrome ersetzen, in dem browser dann die index html starten (ansonsten werden cross origin requests geblockt und nichts funktioniert).