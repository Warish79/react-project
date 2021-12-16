import { createClient } from "@supabase/supabase-js";
import GoogleLogin from 'react-google-login';
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTQ2NTg1OCwiZXhwIjoxOTU1MDQxODU4fQ.17Y8FRZbg32y43utcnfRXE8ST9nwfcEdAbvrOBR2c8c'

const SUPABASE_URL = "https://jrjwjtbvvssuyecgmyuk.supabase.co"

const supabase = createClient(SUPABASE_URL,SUPABASE_KEY);


function Outh() {
  const [user, setUser] = useState(null);

  supabase.auth.onAuthStateChange((event, session) => {
    if (session?.user) {
      setUser((u) => (u = session.user));
    }
  });

  async function googlelogin() {
    const {user,session,error,} = await supabase.auth.signIn({
      provider: "google",
    }
    );
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    setUser((u) => (u = null));
  }

  return (
    <div className="text-center">
      {!user ? ( 
        <button className="bg-green-700 px-4 py-2 hover:bg-red-500 rounded " onClick={googlelogin}>Sign In With Google</button>
      ) : (<button className="bg-red-800 px-4 py-4 rounded hover:bg-red-700" onClick={signOut}>Log Out, {user?.email}</button>
      )}
    </div>
  );
}

export default Outh;
