import { useGlobalContext } from "./Context";
const SearchForm = () => {
  const{setSearchTerm}=useGlobalContext();
  const handleSubmit =(e)=>{
    e.preventDefault(); 
    const searchValue=e.target.elements.search.value;
    console.log(searchValue);
    setSearchTerm(searchValue);
  }
    return (
      <section>
          <h1 className="title">Unsplah images</h1>
          <form onSubmit={handleSubmit} className=" search-form ">
          <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
          >
          </input>
          <button className="btn" type="submit">
            Search
          </button>
          </form>
      </section>
    );
  };
  export default SearchForm;
  