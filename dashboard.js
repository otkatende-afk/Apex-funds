// ===============================
// APEX CAPITAL DASHBOARD
// ===============================

const SUPABASE_URL = "https://qfnbsxfqwizhbzyknsvz.supabase.co";
const SUPABASE_KEY = "sb_publishable_50oc2WjubT5Rzx0Ct-LExw_hhziExmJ";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function loadTrader(){

    const { data:{ user } } = await supabase.auth.getUser();

    if(!user){
        window.location.href="login.html";
        return;
    }

    const { data,error } = await supabase
        .from("traders")
        .select("*")
        .eq("id",user.id)
        .single();

    if(error){
        console.log(error);
        return;
    }

    document.getElementById("welcome-name").textContent=data.full_name;

    document.getElementById("avatar").textContent=
        data.full_name.charAt(0).toUpperCase();

}

loadTrader();
