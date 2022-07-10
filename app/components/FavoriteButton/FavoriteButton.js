import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import IconButton from '@material-ui/core/IconButton';
import { useInjectReducer } from 'utils/injectReducer';
import { setFavorites } from '../../containers/Favorites/actions';
import { makeSelectFavorites } from '../../containers/Favorites/selectors';
import reducer from '../../containers/Favorites/reducer';

const checkSavedInFavorites = (favorites, location) => {
  return favorites.find(item => item.name === location.name) !== undefined
};

export default function FavoriteButton({ selectedLocation }) {
  useInjectReducer({ key: 'favorites', reducer });
  const favoritesList = useSelector(makeSelectFavorites());
  const [isFavorite, setIsFavorite] = useState(checkSavedInFavorites(favoritesList, selectedLocation));

  useEffect(() => {
    setIsFavorite(checkSavedInFavorites(favoritesList, selectedLocation));
  }, [selectedLocation, favoritesList]);

  const dispatch = useDispatch();
  const updateFavorites = (favorites) => dispatch(setFavorites(favorites));
  const handleFavorites = () => {
    let favoritesArray = [...favoritesList];   
    if(isFavorite) favoritesArray = favoritesArray.filter(item => item.key !== selectedLocation.key);
    else favoritesArray.push(selectedLocation);           
    localStorage.setItem('Favorites', JSON.stringify(favoritesArray));
    updateFavorites(favoritesArray);
  }

  return (
    <div>
      Add to favorites
      <IconButton aria-label="favorites" onClick={handleFavorites}>
        {!isFavorite ? 
          <StarBorderRoundedIcon fontSize="large" htmlColor="" style={{verticalAlign:'middle'}}/> :
          <StarRoundedIcon fontSize="large" htmlColor="#7DD4D4" style={{verticalAlign:'middle'}}/> 
        }
      </IconButton>
    </div>
  );
}
