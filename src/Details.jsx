import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.error) {
    return <h1>Something went wrong!</h1>;
  }

  if (results.isLoading) {
    return (
      <div className="loading-panel">
        <h2 className="loader">...Loading</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  console.log(pet);

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} {pet.breed} {pet.city}, {pet.state}
        </h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
  return <h2>{id}</h2>;
};

export default Details;
