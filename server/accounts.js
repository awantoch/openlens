Accounts.onCreateUser(function(options, user) {
    user.firstName = options.firstName;
    user.lastName = options.lastName;
    user.userName = options.userName;
    return user;
});