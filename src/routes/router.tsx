import {Route, Routes} from 'react-router-dom';
import {Suspense, lazy} from 'react';

const Home = lazy(() => import('../pages/home'));
const Defination = lazy(() => import('../pages/defination'));
const Origin = lazy(() => import('../pages/origin'));
const LimbsOfYoga = lazy(() => import('../pages/limbsOfYoga'));
const Branches = lazy(() => import('../pages/branches'));
const Chakras = lazy(() => import('../pages/chakras'));
const Meditation = lazy(() => import('../pages/meditation'));
const Mudras = lazy(() => import('../pages/mudras'));
const Pose = lazy(() => import('../pages/pose'));
const Pranayam = lazy(() => import('../pages/pranayam'));

export function Router(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Home />} path='/'></Route>
        <Route element={<Defination />} path='/defination'></Route>
        <Route element={<Origin />} path='/origin'></Route>
        <Route element={<LimbsOfYoga />} path='/limbs'></Route>
        <Route element={<Branches />} path='/branches'></Route>
        <Route element={<Chakras />} path='/chakras'></Route>
        <Route element={<Pranayam />} path='/pranayam'></Route>
        <Route element={<Mudras />} path='/mudras'></Route>
        <Route element={<Pose />} path='/pose/:id'></Route>
        <Route element={<Meditation />} path='/meditation'></Route>
      </Routes>
    </Suspense>
  );
}
