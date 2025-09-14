module.exports = function(requiredRole) {
  return (req, res, next) => {
    const user = req.user;

    if (!user) return res.status(401).json({ message: "User not found" });
    console.log(user)

    if (user.role !== requiredRole) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  };
};