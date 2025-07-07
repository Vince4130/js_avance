const result = "Hello, World!";
console.log("🚀 ~ result:", result);
// pour générger le console.log automatiquement
// raccourci : Ctrl + Alt + L

// 2. Log multiple variables
// ALT + click pour selectionner plusieurs lignes
const user = getUser();
console.log("🚀 ~ user:", user)
const role = getRole(user);
console.log("🚀 ~ role:", role)
const permissions = getPermissions(role);
console.log("🚀 ~ permissions:", permissions)

// 3. Log dans une fonction
function fetchData() {
    const data = apiCall();
    console.log("[DEBUG] Project ~ 1-turbo-console-log.js:18 ~ fetchData ~ data:", data);
    console.log("🚀 ~ fetchData ~ data:", data)
}

// 4. Supprimer les logs generés par Turbo Console Log
// Pour supprimer les logs générés par Turbo Console Log, 
// tu peux utiliser la commande "Remove All Turbo Console Log Statements" 
// dans la palette de commandes de VS Code (Ctrl + Shift + P).P

// 5 personnaliser les logs
// Pour personnaliser les logs générés par Turbo Console Log,
// tu peux modifier les paramètres dans le fichier de configuration 
// de l'extension.
// .vscode/settings.json
/*{
    "turboConsoleLog.logFormat": "🚀 ~ {name}: {value}",
    "turboConsoleLog.logLevel": "info",
    "turboConsoleLog.showLogStatement": true,
    "turboConsoleLog.showLogStatementInDebugMode": true
}*/

