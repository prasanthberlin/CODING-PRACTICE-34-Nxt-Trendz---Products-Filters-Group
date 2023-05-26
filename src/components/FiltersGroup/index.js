import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    userSearchValue,
    titleSearch,
    clearFilters,
    ratingsList,
  } = props

  const getUserSearch = event => {
    if (event.key === 'Enter') {
      userSearchValue(event.target.value)
    }
  }

  const selectedCategory = event => {
    const {value} = event.target
    console.log(event.target.value)
    const categoryId = categoryOptions.find(item => item.name === value)

    console.log(categoryId)
  }

  const clearAllFilters = () => {
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onKeyDown={getUserSearch}
          value={titleSearch}
        />
        <BsSearch className="search-icon" />
      </div>
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list-items">
          {categoryOptions.map(eachCategory => (
            <li key={eachCategory.categoryId}>
              <button
                className="category-button"
                onClick={selectedCategory}
                type="button"
              >
                <p>{eachCategory.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="rating-heading">Rating</h1>
        <li className="rating-list-items">
          {ratingsList.map(eachRating => (
            <li key={eachRating.categoryId}>
              <button className="rating-button" type="button">
                <img
                  src={eachRating.imageUrl}
                  alt={`rating ${eachRating.ratingId}`}
                  className="rating-image"
                />
                <p className="rating-up-text">&& up</p>
              </button>
            </li>
          ))}
        </li>
      </div>
      <button
        type="button"
        onClick={clearAllFilters}
        className="clear-filter-button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
