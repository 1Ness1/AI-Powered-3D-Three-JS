import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store/index.js';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#CCCCCC',
          '#EFBD4E',
          '#80C670',
          '#726DE8',
          '#353934',
          '#2CCCE4',
          '#FF8A65',
          '#7098DA',
          '#C19277',
          '#FF96AD',
          '#512314',
          '#51F12D',
        ]}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
};

export default ColorPicker;
