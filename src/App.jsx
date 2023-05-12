import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector,useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { Routes,BrowserRouter,Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/Home"
import Details from "./pages/details/Detail"
import SearchResult from "./pages/searchResult/searchResult"
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/pageNotFound"

function App() {

  //const count = useSelector((state) => state)
  const dispatch = useDispatch();
  const {url} = useSelector((state)=>state.home);
  console.log(url)

  useEffect(() => {
    fetchApiConfig();
  },[])
  


  const fetchApiConfig = () =>{
    fetchDataFromApi('/configuration').then((res) =>{
      console.log(res);

      const url = {
        backdrop: res?.images?.secure_base_url + "original",
        poster: res?.images?.secure_base_url + "original",
        profile: res?.images?.secure_base_url + "original",
      }

      dispatch(getApiConfiguration(url));
    });
  }



  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:mediaType/:id" element={<Details/>}/>
        <Route path="/:search/:id" element={<SearchResult/>}/>
        <Route path="/:explore/:mediaType" element={<Explore />}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
