import {Key} from 'react';
import {To} from 'react-router-dom';

export interface SearchResultItem {
  readonly label: Key;
  readonly routing: To;
}
