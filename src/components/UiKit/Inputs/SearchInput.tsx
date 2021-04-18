import * as React from 'react';
import { useState } from 'react';
import TextInput from './TextInput';
import IconButton from '../IconButton';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { MovieResultContainer } from '../MovieSearchResult';

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

  const onChangeTextValue = (text: string) => {
    setValue(text);
    onChangeQuery(text);
  };

  if (isExpanded) {
    return (
      <>
        <TextInput
          ref={inputRef}
          autoFocus
          onChange={onChangeTextValue}
          value={value}
          icon="search"
          placeholder={placeholder}
        />
        {value.length > 2 && <MovieResultContainer items={[]} />}
      </>
    );
  } else {
    return <IconButton icon="search" onPress={() => setExpanded(true)} />;
  }
};

export default SearchInput;
