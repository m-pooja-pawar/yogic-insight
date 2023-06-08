import {useCallback, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {getAsanaDetail} from '../services/asana';
import {AsanaSequence} from '../components/asanaSequence';
import {Asana} from '../components/asana';
import {AsanaSequenceList} from '../interface/asanaSequence';

// eslint-disable-next-line import/no-default-export
export default function HathYogaAsana(): JSX.Element {
  const {type} = useParams();
  const {id} = useParams();
  const {asana} = useParams();
  const [apiParam, setApiParam] = useState<string>();
  const [asanaDetail, setAsanaDetail] = useState<AsanaSequenceList | null>();

  useEffect(() => {
    if (type && id) {
      setApiParam(`${type}/${id}/${asana}`);
    } else if (type && asana) {
      setApiParam(`${type}/${asana}`);
    } else if (id && asana) {
      setApiParam(`${id}/${asana}`);
    } else {
      setApiParam(`hathyogasana/${asana}`);
    }
  }, [type, id, asana, setApiParam]);

  const getAsanaDetailData = useCallback(async () => {
    if (apiParam) {
      setAsanaDetail(null);
      getAsanaDetail(apiParam).then((response) => {
        if (response && response.data) {
          setAsanaDetail(response.data.data);
        }
      });
    }
  }, [apiParam, setAsanaDetail]);

  useEffect(() => {
    getAsanaDetailData();
  }, [apiParam, getAsanaDetailData]);

  return asanaDetail ? (
    asanaDetail.sequence ? (
      <AsanaSequence {...asanaDetail}></AsanaSequence>
    ) : (
      <Asana></Asana>
    )
  ) : (
    <>Loading... {apiParam}</>
  );
}
