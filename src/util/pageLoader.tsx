import {FC, useEffect, useState} from 'react';

import {pageLoader$} from '../util/pageLoaderHelper';

import {Loader} from './loader';

export const PageLoader: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    pageLoader$.get().subscribe((data) => {
      setIsLoading(data);
    });
  }, [setIsLoading]);

  return <Loader isLoading={isLoading} />;
};
