import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import NewsCard from "./NewsCard";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Loader from "./Loader.gif"
import Footer from "./Footer";
import instagram from "./instagram.png"
import twite from "./twite.png"
import facebook from "./facebook.png"
const Main = () => {
  const [category, setcategory] = useState("General");
  const [country, setcountry] = useState("in");
  const [resources, setResources] = useState([]);
  const [counter, setCounter] = useState(0);
  const [loader, setloader] = useState(false);

  const countryCodes = {
    ae: "United Arab Emirates",
    ar: "Argentina",
    at: "Austria",
    au: "Australia",
    be: "Belgium",
    bg: "Bulgaria",
    br: "Brazil",
    ca: "Canada",
    ch: "Switzerland",
    cn: "China",
    co: "Colombia",
    cz: "Czechia",
    de: "Germany",
    eg: "Egypt",
    es: "Spain",
    fr: "France",
    gb: "United Kingdom",
    gr: "Greece",
    hk: "Hong Kong",
    hu: "Hungary",
    id: "Indonesia",
    ie: "Ireland",
    il: "Israel",
    in: "India",
    it: "Italy",
    jp: "Japan",
    kr: "South Korea",
    lt: "Lithuania",
    lv: "Latvia",
    ma: "Morocco",
    mx: "Mexico",
    my: "Malaysia",
    ng: "Nigeria",
    nl: "Netherlands",
    no: "Norway",
    nz: "New Zealand",
    ph: "Philippines",
    pl: "Poland",
    pt: "Portugal",
    ro: "Romania",
    rs: "Serbia",
    ru: "Russia",
    sa: "Saudi Arabia",
    se: "Sweden",
    sg: "Singapore",
    sk: "Slovakia",
    th: "Thailand",
    tr: "Turkey",
    tw: "Taiwan",
    ua: "Ukraine",
    us: "United States",
    ve: "Venezuela",
    za: "South Africa",
  };

  const getInformation = async () => {
    try {
      setloader(true)
      const fetchdata = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3529ffd2565d48e4a83808e73f7552d5&page=${counter}`
      );
      const data = await fetchdata.json();
      const articles = data.articles;
      const extractedArticle = articles.map((article) => {
        const { totalResults } = data.totalResults;
        const { id, name } = article.source;
        const {
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
        } = article;
        return {
          id,
          name,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
          totalResults,
        };
      });
      setResources(extractedArticle);
      console.log("this is extracted articles : " + extractedArticle);
      console.log("this is resources )::" + resources);
      console.log(data);
    } catch (error) {
      console.log(error);
    }finally{
      setloader(false)
    }
  };
  const fetchData = async (page) => {
    try {
      setloader(true);
      const fetchData = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3529ffd2565d48e4a83808e73f7552d5&page=${page}`
      );
      const data = await fetchData.json();
      const totalResults = data.totalResults;
      const articles = data.articles;
      const extractedArticle = articles.map((article) => {
        const { id, name } = article.source;
        const {
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
        } = article;
        return {
          id,
          name,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
          totalResults,
        };
      });
      setResources(extractedArticle);
    } catch (error) {
      
      console.log(error);
    } finally{
      setloader(false)
    }
    
  };

  const PreviousPage = async () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      await fetchData(newCounter);
    }
  };

  const NextPage = async () => {
    if (resources.totalResults != 0) {
      const newCounter = counter + 1;
      setCounter(newCounter);
      await fetchData(newCounter);
    }
  };
  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  //   setCounter(0); // Reset counter when the country changes
  //   fetchData(0); // Fetch data for the new country and reset to the first page
  // };
  useEffect(() => {
    console.log("this is first ccategory :" + category);
  });
  useEffect(() => {
    getInformation();
  }, [category]);
  useEffect(() => {
    // Fetch data on component mount
    fetchData(counter);
  }, [category, counter, country]); //
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <main className=" ms-sm-auto" style={{padding:"0px"}}>
            <Navbar setcategory={setcategory} category={category} />
            <Category setcategory={setcategory} category={category} />
            <h2
              className="pb-2 border-bottom mb-5 d-flex justify-content-center"
              style={{ fontSize: "45px" }}
            >
              Latest News of {category}
            </h2>
            <div className="container  d-flex justify-content-center ">
          <div class="col-md-5 mb-3 ">
                <label className=" d-flex justify-content-center" for="country"><h3>Choice your Country</h3></label>
                <select
            className="custom-select d-block w-100"
            id="country"
            value={country}
            onChange={(e)=>setcountry(e.target.value)}
            required=""
            fdprocessedid="p4phl"
          >
          <option value="">Choose...</option>
            {Object.entries(countryCodes).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
            </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
          </div>
            {loader ? <div className="container d-flex justify-content-center"><img  src={Loader} alt="Loading..." /> </div>: <NewsCard resources={resources} />}
            <div className="container d-flex justify-content-between">
              <button
                disabled={counter <= 1}
                class="btn btn-outline-secondary"
                type="button"
                onClick={PreviousPage}
              >
                Previous
              </button>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={NextPage}
              >
                Next
              </button>
            </div>
          </main>
          <Footer instagram={instagram} twite={twite} facebook={facebook}/>
        </div>
      </div>
    </div>
  );
};

export default Main;
