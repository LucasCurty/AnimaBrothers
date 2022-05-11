import AuthGoogleProvider from "./Context/authGoogle";
import AppRouters from "./Routers/AppRouters"


import { SectionMain } from "./global.css"

function App() {
  return (
    <SectionMain>
    <AuthGoogleProvider>
        <AppRouters />  
    </AuthGoogleProvider>
  </SectionMain>
  );
}

export default App;
