import React from 'react';

const Search = () => {
    const values = "";
    return (
        <div>
            <form name="form" onSubmit={values}>
             <input type="text" placeholder="search recepies" name="recepie"/>
             <input type="button" value="search" name="submit"/>
            </form>
        </div>
    );
};

export default Search;