// ===============================
// APEX CAPITAL AUTH
// ===============================

// Your Supabase Project
const SUPABASE_URL = "https://qfnbsxfqwizhbzyknsvz.supabase.co";
const SUPABASE_KEY = "sb_publishable_50oc2WjubT5Rzx0Ct-LExw_hhziExmJ";

// Connect to Supabase
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ===============================
// REGISTER
// ===============================

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

  registerBtn.addEventListener("click", async function () {

    const fullName = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Create authentication account
    const { data, error } = await supabaseClient.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      alert(error.message);
      return;
    }

    // Save trader profile
    if (data.user) {

      const { error: dbError } = await supabaseClient
        .from("traders")
        .insert([{
          id: data.user.id,
          full_name: fullName,
          email: email
        }]);

      if (dbError) {
        alert(dbError.message);
        return;
      }

      alert("Registration successful!");

      window.location.href = "login.html";

    }

  });

}
// ===============================
// LOGIN
// ===============================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

  loginBtn.addEventListener("click", async function () {

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login successful!");

    window.location.href = "dashboard.html";

  });

}
