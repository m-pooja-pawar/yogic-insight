import {Key} from 'react';
import {To} from 'react-router-dom';

export interface IndexItem {
  readonly children?: readonly IndexItem[];
  readonly id: string;
  readonly label: Key;
  readonly label_en?: Key;
  readonly routing?: To;
}
