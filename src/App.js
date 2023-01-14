import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  console.log(cats);
  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of the different species. Lots of cats for your viewing plesure
      </p>
      <hr />
      <div className="Gallery">
        {cats.map(cat => 
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                alt={cat.name}
                src={"https://picsum.photos/200"}
                width="200"
                height="200"
              />
            </div>

            <div className="column column-right">
              <h2>{cat.name}</h2>
              <h5>temperment: {cat.temperment}</h5>
              <p>{cat.description}</p>
            </div>
          </div>
        )}
      </div>
      <button>
        VIEW MORE CATS
      </button>
    </div>
  );
}
export default App;
