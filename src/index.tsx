import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthGoogleProvider from "./shared/Context/authGoogle";
import AppRouters from "./shared/Routers/AppRouters"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <main className="container mx-auto max-w-7xl h-fit bg-slate-700"> 
        <AuthGoogleProvider > 
            <AppRouters />  
        </AuthGoogleProvider>
      </main>
  </React.StrictMode>
);
