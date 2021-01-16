import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Components
import MainWrapper from 'components/Main';
import Character from 'components/Character';
import CharacterDetails from 'components/CharacterDetails';
import Pagination from 'components/Pagination';

// Utilities
import { get } from 'utilities/request'


// Fixtures
import { initialState } from 'mock/records'


// Styles
import './App.scss';

const App = () => {
  const [state, setState] = useState<any>(initialState);
  const [showModal, setModal] = useState<boolean>(false);
  const [isLocationLoading, setLocationLoading] = useState<boolean>(false);
  

  useEffect(() => {
    get(state.paginationInfo.next).then((response: any) => {
      setState({
        ...state,
        characters: response.data.results,
        paginationInfo: response.data.info,
        isLoading: false
      })
    })
  }, [])

  const setAction = (action: string) => {
    setState({
      ...state,
      isLoading: true
    })
    get(action === 'prev' ? state.paginationInfo.prev : state.paginationInfo.next).then((response: any) => {
      setState({
        ...state,
        characters: response.data.results,
        paginationInfo: response.data.info,
        isLoading: false
      })
    })
  }

  const showCharacter = async (id: number) => {
    const active = state.characters.find((character: any) => id === character.id)
    setLocationLoading(true)
    setModal(true)

    try {
      const origin = active.origin.url ? await get(active.origin.url) : { data: null };
      const current = active.location.url ? await get(active.location.url) : { data: null };
      
      setState({
        ...state,
        active: {...active, origin: origin.data || active.origin, location: current.data || active.location},
      })
      setLocationLoading(false)
    } catch (error) {
      setModal(false)
    }
  }

  const closeModal = () => setModal(false)

  return (
    <div className="App">
      <h1>The Rick and Morty Characters</h1>
      <MainWrapper isLoading={state.isLoading} total={state.paginationInfo.count}>
        <div className="container">
          {state.characters.map((character: any, key: number) => <Character key={key} data={character} onClick={showCharacter} />)}
          <Pagination pages={state.paginationInfo.pages} prev={state.paginationInfo.prev} next={state.paginationInfo.next} getPage={setAction} />
          <Modal
            isOpen={showModal}
            className="Modal"
          >
            <>
              <h3 className="close" onClick={closeModal}>Close</h3>
              {isLocationLoading ? <div className="main__loading">Loading...</div> : <CharacterDetails data={state.active}/>}
            </>
          </Modal>
        </div>
      </MainWrapper>
    </div>
  );
};

export default App;
