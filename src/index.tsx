import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthGoogleProvider from "./shared/Context/authGoogle";
import AppRouters from "./routes/AppRouters"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <main className="relative"> 
        <AuthGoogleProvider > 
            <AppRouters />  
        </AuthGoogleProvider>
      </main>
  </React.StrictMode>
);
