import * as React from 'react';
import { useState } from 'react';
import { TextInput } from '../UiKit/Inputs';
import IconButton from '../UiKit/IconButton';
import useOutsideClick from '../../hooks/useOutsideClick';
import { MovieResultContainer } from '../UiKit/MovieSearchResult';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
  onChangeQuery: (value: string) => void;
  placeholder: string;
}

const SearchInput: React.VFC<Props> = ({ onChangeQuery, placeholder }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  // if user clicks outside of the text input area, they should see search button
  useOutsideClick(inputRef, () => setExpanded(false));
  const loading = useSelector((store: RootState) => store.search.loading);
  const data = useSelector((store: RootState) => store.search.data);

  const onChangeTextValue = (text: string) => {
    setValue(text);
    onChangeQuery(text);
  };

  if (isExpanded) {
    return (
      <div ref={inputRef}>
        <TextInput
          autoFocus
          onChange={onChangeTextValue}
          value={value}
          icon="search"
          placeholder={placeholder}
        />
        {value.length > 2 && (
          <MovieResultContainer
            onPress={() => setExpanded(false)}
            items={data}
            loading={loading}
          />
        )}
      </div>
    );
  } else {
    return <IconButton icon="search" onPress={() => setExpanded(true)} />;
  }
};

export default React.memo(SearchInput);
