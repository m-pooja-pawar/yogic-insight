import {Suspense, lazy} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const Definition = lazy(() => import('../pages/definition'));
const Origin = lazy(() => import('../pages/origin'));
const Paths = lazy(() => import('../pages/paths'));
const LimbsOfYoga = lazy(() => import('../pages/limbsOfYoga'));
const Prana = lazy(() => import('../pages/prana'));
const Chakras = lazy(() => import('../pages/chakras'));
const HathYoga = lazy(() => import('../pages/hathYoga'));
const LimbsOfHathaYoga = lazy(() => import('../pages/limbsOfHathaYoga'));
const GeneralNotesForYogaAsanas = lazy(() => import('../pages/generalNotesForYogaAsanas'));
const HathYogaAsana = lazy(() => import('../pages/hathYogaAsana'));
const Mudras = lazy(() => import('../pages/mudras'));
const GeneralNotesForPranayama = lazy(() => import('../pages/generalNotesForPranayama'));
const Pranayama = lazy(() => import('../pages/pranayama'));
const Meditation = lazy(() => import('../pages/meditation'));

export function Router(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
