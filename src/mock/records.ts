export const initialState = {
  isLoading: true,
  isLocationLoading: false,
  characters: [],
  active: null,
  showModal: false,
  paginationInfo: {
        "count": 0,
        "pages": 0,
        "next": "https://rickandmortyapi.com/api/character?page=1",
        "prev": null
    }
}
