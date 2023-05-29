import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    userSearchValue,
    clearFilters,
    filterByCategory,
    filterByRating,
  } = props

  const getUserSearch = event => {
    if (event.key === 'Enter') {
      userSearchValue(event.target.value)
    }
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
        />
        <BsSearch className="search-icon" />
      </div>
      <div>
        <h1 className="category-heading">Category</h1>
        <ul className="category-list-items">
          {categoryOptions.map(eachCategory => {
            const selectedCategory = () => {
              filterByCategory(eachCategory.categoryId)
            }
            return (
              <li key={eachCategory.categoryId}>
                <button
                  className="category-button"
                  onClick={selectedCategory}
                  type="button"
                >
                  <p>{eachCategory.name}</p>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h1 className="rating-heading">Rating</h1>
        <li className="rating-list-items">
          {ratingsList.map(eachRating => {
            const selectedRating = () => {
              filterByRating(eachRating.ratingId)
            }

            return (
              <li key={eachRating.ratingId}>
                <button
                  className="rating-button"
                  onClick={selectedRating}
                  type="button"
                >
                  <img
                    src={eachRating.imageUrl}
                    alt={`rating ${eachRating.ratingId}`}
                    className="rating-image"
                  />
                  <p className="rating-up-text">&& up</p>
                </button>
              </li>
            )
          })}
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
