const adminAuth = (req, res, next) => {
  console.log("admin auth is getting checked");
  const token = "xyzaa";
  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(404).send("User is not authorized");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};
