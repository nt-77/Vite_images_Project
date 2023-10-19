import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";

const Gallery = () => {
  const {searchTerm}=useGlobalContext();
  const url=`https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}`
    
  const response=useQuery({
    queryKey:['images',{searchTerm}],
    queryFn:async ()=>{
      const result=await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    }
  })
  if(response.isLoading){
    return<section className="image-container">
      <h4>Loading....</h4>
    </section>
  };
  if(response.isError){
    return<section className="image-container">
      <h4>There was an error...</h4>
    </section>
  };
  const results=response.data.results;
  if(results>1){
    return<section className="image-container">
      <h4>Could not find what u were looking for..</h4>
    </section>
  };

  return(
  <section className="image-container">
 {results.map((item)=>{
  return <img src={item?.urls?.regular} alt={item.alt_description} key={item.id} className="img"></img>
 })}
</section>);
  };
export default Gallery;
  