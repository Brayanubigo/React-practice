import React from "react";
import Providers from "./Providers";
import AppRoutes from "./routes";
import NavigationBar from "./components/NavigationBar/NavigationBar";

const App: React.FC = () => {
    return (
        <Providers>
         <NavigationBar/>
           <div className="mt-5 mb-5 w-9/12 mx-auto">
            <AppRoutes/>
            </div>
        </Providers>
    )

}

export default App;