import {Suspense, lazy} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

import {Loader} from '../util/loader';

const Home = lazy(() => import('../components/home/home'));
const Definition = lazy(() => import('../components/definition/definition'));
const Origin = lazy(() => import('../components/origin/origin'));
const Paths = lazy(() => import('../components/paths/paths'));
const LimbsOfYoga = lazy(() => import('../components/limbsOfYoga/limbsOfYoga'));
const Prana = lazy(() => import('../components/prana/prana'));
const Chakras = lazy(() => import('../components/chakras/chakras'));
const HathYoga = lazy(() => import('../components/hathYoga/hathYoga'));
const LimbsOfHathaYoga = lazy(() => import('../components/limbsOfHathaYoga/limbsOfHathaYoga'));
const GeneralNotesForYogaAsanas = lazy(
  () => import('../components/generalNotesForYogaAsanas/generalNotesForYogaAsanas'),
);
const HathYogaAsana = lazy(() => import('../components/hathYogaAsana/hathYogaAsana'));
const Mudras = lazy(() => import('../components/mudras/mudras'));
const GeneralNotesForPranayama = lazy(() => import('../components/generalNotesForPranayama/generalNotesForPranayama'));
const Pranayama = lazy(() => import('../components/pranayama/pranayama'));
const Meditation = lazy(() => import('../components/meditation/meditation'));

export function Router(): JSX.Element {
  return (
    <Suspense fallback={<Loader isLoading={true} />}>
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<Definition />} path='/defination'></Route>
        <Route element={<Origin />} path='/origin'></Route>
        <Route element={<Paths />} path='/paths'></Route>
        <Route element={<LimbsOfYoga />} path='/limbs'></Route>
        <Route element={<Prana />} path='/prana'></Route>
        <Route element={<Chakras />} path='/chakras'></Route>
        <Route element={<HathYoga />} path='/hathayoga'></Route>
        <Route element={<LimbsOfHathaYoga />} path='/limbsofhathayoga'></Route>
        <Route element={<GeneralNotesForYogaAsanas />} path='/generalnotesforyogaasanas'></Route>
        <Route element={<HathYogaAsana />} path='/hathayogaasana/:type/:id/:asana'></Route>
        <Route element={<HathYogaAsana />} path='/hathayogaasana/:type/:asana'></Route>
        <Route element={<HathYogaAsana />} path='/hathayogaasana/:asana'></Route>
        <Route element={<Mudras />} path='/mudras'></Route>
        <Route element={<GeneralNotesForPranayama />} path='/generalnotesforpranayama'></Route>
        <Route element={<Pranayama />} path='/pranayama/:id'></Route>
        <Route element={<Meditation />} path='/meditation'></Route>
        <Route element={<Navigate replace to='/' />} path='*' />
      </Routes>
    </Suspense>
  );
}
