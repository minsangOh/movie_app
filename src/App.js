import PropTypes from "prop-types"

const foodILike =
  [
    {
      id: 1,
      name: "kimchi",
      image: "https://i.namu.wiki/i/3u7KQ8jVXWJMJpioMNBo5bFb7NrMd1jUbJrGXy99vSgh57D2w0BHG3RlEnawqyRlfAuTihp37sPnlCKX3IlKNg.webp",
      rating : 4.3,
    },
    {
      id: 2,
      name: "Samgyeopsal",
      image: "https://i.namu.wiki/i/SdI6mHzKiWg-yJEqBpWhaACTth0ZSU_qSjhHCnQp5OxqwVl-PRIzql6bkmp1tm0YaHxjDoTbt-nBtiSE4nhqbQ.webp",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Bibimbap",
      image: "https://i.namu.wiki/i/dgjXU86ae29hDSCza-L0GZlFt3T9lRx1Ug9cKtqWSzMzs7Cd0CN2SzyLFEJcHVFviKcxAlIwxcllT9s2sck0RA.jpg",
      rating: 4.9,
    },
  ]

function Food({ name, pict, rating })  // ({favorite}) 은 (props.favorite)의 약어
{
  return <div>
    <h1>I like {name}</h1>
    <h4>{ rating } / 5.0  </h4>
    <img src={pict} alt ={name} />
  </div>
}

Food.propTypes = {

}





function App() {
  return (
    <div className="App">
      {foodILike.map(dish =>
        <Food
          key = {dish.id}
          name= {dish.name}
          pict= {dish.image}
          rating = {dish.rating} 
        />
      )}
    </div>
  );
}

export default App;
