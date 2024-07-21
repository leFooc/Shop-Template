import React from 'react';
import { Route, Routes} from 'react-router-dom'
import { App, ZMPRouter, SnackbarProvider } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import { HomePage } from '../pages/homepage';
import { Layout } from '../pages/layout';
import { Category } from '../pages/category';


const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
      <SnackbarProvider>
        <ZMPRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/products">
                <Route path=":productId" element={<>id</>} />
                <Route index element={<Category />} />
              </Route>
              <Route path="/carts" element={<>cart</>}/>
              <Route path="/profile" element={<>profile</>}/>
              <Route index element={<HomePage/>}/>
            </Route>
          </Routes>
        </ZMPRouter>
      </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;