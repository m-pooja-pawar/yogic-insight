import {Key} from 'react';
import {To} from 'react-router-dom';

export interface IndexItem {
  readonly children?: readonly IndexItem[];
  readonly label: Key;
  readonly routing?: To;
}
