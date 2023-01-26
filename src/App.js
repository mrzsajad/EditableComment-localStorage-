import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeTitle, getData } from "./redux/action";
import { Button, Spinner } from "react-bootstrap";

function App() {
  const [select, setSelect] = useState(null);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    // //step 6
    const data = JSON.parse(localStorage.getItem("posts"));

    //step 8
    // if(!data.lenght){
    if (!data?.length) {
      dispatch(getData());
    }
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Spinner animation="border" variant="info" />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        data.map((item, index) => {
          if (item.id === select) {
            return (
              <div key={item.id}>
                <input
                  // key={index}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></input>
                <Button
                  variant="info"
                  onClick={() => {
                    dispatch(changeTitle(index, text));
                    setSelect(null);
                  }}
                >
                  edit
                </Button>{" "}
              </div>
            );
          } else {
            return (
              <p
                key={item.id}
                onClick={() => {
                  setText(item.title);
                  setSelect(item.id);
                }}
              >
                {item.title}
              </p>
            );
          }
        })
      )}
    </div>
  );
}

export default App;
