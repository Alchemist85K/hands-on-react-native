import { useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

const FastImage = ({ source, ...props }) => {
  const [uri, setUri] = useState(source.uri);

  return <Image source={{ uri }} {...props} />;
};

FastImage.propTypes = {
  source: PropTypes.object.isRequired,
};

export default FastImage;
