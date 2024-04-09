import {Key} from 'react';
import {To} from 'react-router-dom';

export interface SearchResultItem {
  readonly id: string;
  readonly label: Key;
  readonly label_en: string;
  readonly routing: To;
}
