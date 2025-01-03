let userRole="admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel="Full access granted";
}
else if (userRole==="maneger"){
    accessLevel="Limited access granted";
}
else{
    accessLevel="No access Granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn=true;
let userMessage;
if(isLoggedIn){
    if(userRole === "a"){
        userMessage="Welcome, Admin !";
    }
    else{
        userMessage="Welcome, User";
    }
}
else{
    userMessage="Please log in to access the system"
}
console.log("User Message:",userMessage);

let userType="Subscriber";
let userCategory;
switch (userType) {
    case "admin":
        userCategory="Administrator";
        break;
    case "maneger":
        userCategory="Maneger";
        break;
    case "Subscriber":
        userCategory="Subscriber";
        break;

    default:
        userCategory="Unknown";
        break;
}
console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus=isAuthenticated ? "Authenticated":"Not Authenticated";
console.log("Authentication Status:", authenticationStatus);

let user="Enrolled Member";
let Service;
switch (user) {
    case "Employee":
        Service="You have access to Dietary Services.";
        break;
    case "Enrolled Member":
        Service="You have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        Service="You have partial access to facilitate Dietary Services.";
        break;
    case "Non Subscriber":
        Service="You need to enroll or subscribe first to avail this facility.";
    default:
        Service="Invalid role. Please check your credentials.";
        break;
}
console.log("Message:", Service);