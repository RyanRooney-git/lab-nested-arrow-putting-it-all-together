function createLoginTracker(userInfo) {
  let attemptCount = 0; 

  const passwordAttempt = (userPassword) => {
    attemptCount++; 
    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (userPassword === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return passwordAttempt;
}


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
