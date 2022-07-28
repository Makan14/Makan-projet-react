import react from 'react'
import styles from "./searchbar.module.css"; 



export const Searchbar = () =>{
    return(
        <div className={styles.searchBar}> 

            <form className="flex flex-col"> 
                <label htmlFor="name" className="mb-2 italic">Name</label>
                    <input
                        className="mb-4 border-b-2"
                        id="name"
                        name="name"
                        type="text"
                        autocomplete="name"
                        required
                    />
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}; 