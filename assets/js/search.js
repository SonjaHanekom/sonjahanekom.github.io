/**
 * Bind the search method to clicking the search button or pressing 'Enter' within the search input field. 
 */
window.addEventListener("load", () => {
  var searchButton = document.querySelector('#searchBtn');

  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }

  var searchInput = document.querySelector('#search');

  if (searchInput) {
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    });
  }
})


/** 
 * Initiate a search by getting the current value of the search input and calling showBlogs 
 * */
const handleSearch = () => {
  var searchInput = document.querySelector('#search');

  if (!searchInput) {
    console.error('Search input not found');
    return;
  }

  const searchValue = searchInput.value;

  showBlogs(searchValue);
}


/**
 * Find all elements with class blog, determine if the title (represented by an h2) contains the search string and hide/show accordingly.
 * @param {any} searchValue The text string to search for.
 */
const showBlogs = (searchValue) => {
  searchValue = searchValue.toLocaleLowerCase();
  
  const blogs = document.querySelectorAll('.blog');

  blogs.forEach(blog => {
    if (!searchValue)
    {
      blog.style.display = 'flex';
      return;
    }

    const title = blog.querySelector('h2');

    const compare = title?.innerText.toLocaleLowerCase();

    blog.style.display = compare?.includes(searchValue) ? 'flex' : 'none';
  })
}

