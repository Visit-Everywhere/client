import "./App.scss";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./basics/footer/Footer.jsx";

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/footer" element={<Footer/>}>
                    {/*<Route index element={<Home />} />*/}
                    {/*<Route path="blogs" element={<Blogs />} />*/}
                    {/*<Route path="contact" element={<Contact />} />*/}
                    {/*<Route path="*" element={<NoPage />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
