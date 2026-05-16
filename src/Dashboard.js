import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>لوحة تحكم الطبيب</h1>
      <p>مرحباً، {user?.email}</p>
      <button onClick={handleLogout} style={{ padding: '10px 30px', marginTop: '20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}>
        تسجيل الخروج
      </button>
    </div>
  );
}

export default Dashboard;