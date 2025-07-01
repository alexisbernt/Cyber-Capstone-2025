const moment = require("moment");
const { getRepository } = require("typeorm");
const { User } = require("../entity/User");

// 🔐 Login Handler
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userRepo = getRepository(User);
  const user = await userRepo.findOne({ where: { email } });

  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const now = moment();
  const lastLogin = moment(user.lastLogin);

  if (lastLogin.isValid()) {
    const diffDays = now.diff(lastLogin, "days");
    if (diffDays === 1) {
      user.loginStreak += 1;
    } else if (diffDays > 1) {
      user.loginStreak = 1;
    }
  } else {
    user.loginStreak = 1;
  }

  user.lastLogin = now.toDate();
  await userRepo.save(user);

  // Set cookie for session tracking
  res.cookie("userEmail", user.email, {
    httpOnly: true,
    secure: false, // set to true in production
    sameSite: "lax",
  });

  res.json({
    message: `Welcome back, ${user.name}!`,
    user: {
      name: user.name,
      streak: user.loginStreak,
    },
  });
};

// 👤 Get Current Logged-In User
const getCurrentUser = async (req, res) => {
  const userRepo = getRepository(User);
  const email = req.cookies?.userEmail;

  if (!email) return res.status(401).json({ message: "Not authenticated" });

  const user = await userRepo.findOne({ where: { email } });
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json({
    user: {
      name: user.name,
      streak: user.loginStreak,
    },
  });
};

// ✅ Export both
module.exports = {
  loginUser,
  getCurrentUser,
};

