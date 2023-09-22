import {useState, useCallback, useEffect} from 'react';

import {MultipleSectionsWithHeader} from '../components/multipleSectionsWithHeader';
import {MultipleSectionsWithHeaderProp} from '../interface/multipleSectionsWithHeaderProp';
import {getGeneralNotesForAsanas} from '../services/generalNotesForAsanas';

// eslint-disable-next-line import/no-default-export
export default function GeneralNotesForYogaAsanas(): JSX.Element {
  const [notes, setNotes] = useState<MultipleSectionsWithHeaderProp>();

  const fetchNotes = useCallback(async () => {
    getGeneralNotesForAsanas().then((response) => {
      if (response && response.data) {
        setNotes(response.data.data);
      }
    });
  }, [setNotes]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  return notes ? <MultipleSectionsWithHeader {...notes}></MultipleSectionsWithHeader> : <></>;
}
