import {useState, useCallback, useEffect} from 'react';

import {MultipleSectionsWithHeader} from '../multipleSectionsWithHeader/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../multipleSectionsWithHeader/multipleSectionsWithHeaderProp';

import {getGeneralNotesForAsanas} from './generalNotesForAsanas.api';

// eslint-disable-next-line import/no-default-export
export default function GeneralNotesForYogaAsanas(): JSX.Element {
  const [notes, setNotes] = useState<MultipleSectionsWithHeaderProp>();

  const fetchNotes = useCallback(async () => {
    getGeneralNotesForAsanas().then((response) => {
      if (response && response.data) {
        setNotes(response.data);
      }
    });
  }, [setNotes]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return notes ? <MultipleSectionsWithHeader {...notes}></MultipleSectionsWithHeader> : <></>;
}
