import {Route, Routes} from 'react-router-dom';

import {Branches} from '../pages/branches';
import {Chakras} from '../pages/chakras';
import {Home} from '../pages/home';
import {LimbsOfYoga} from '../pages/limbsOfYoga';
import {Meditation} from '../pages/meditation';
import {Mudras} from '../pages/mudras';
import {Pose} from '../pages/pose';
import {Pranayam} from '../pages/pranayam';
import {YogaDefination} from '../pages/yogaDefination';

export function Router(): JSX.Element {
  return (
    <Routes>
      <Route element={<Home />} path='/'></Route>
      <Route element={<YogaDefination />} path='/defination'></Route>
      <Route element={<LimbsOfYoga />} path='/limbs'></Route>
      <Route element={<Branches />} path='/branches'></Route>
      <Route element={<Chakras />} path='/chakras'></Route>
      <Route element={<Pranayam />} path='/pranayam'></Route>
      <Route element={<Mudras />} path='/mudras'></Route>
      <Route element={<Pose />} path='/pose'></Route>
      <Route element={<Meditation />} path='/meditation'></Route>
    </Routes>
  );
}
