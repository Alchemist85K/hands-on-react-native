import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import * as FileSystem from 'expo-file-system';
import * as Crypto from 'expo-crypto';

const FastImage = ({ source, ...props }) => {
  const [uri, setUri] = useState(source.uri);

  useEffect(() => {
    (async () => {
      try {
        const hashed = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          source.uri
        );
        const fileSystemUri = `${FileSystem.cacheDirectory}${hashed}`;

        const metadata = await FileSystem.getInfoAsync(fileSystemUri);
        if (!metadata.exists) {
          await FileSystem.downloadAsync(source.uri, fileSystemUri);
        }
        setUri(fileSystemUri);
      } catch (e) {
        setUri(source.uri);
      }
    })();
  }, [source.uri]);

  return <Image source={{ uri }} {...props} />;
};

FastImage.propTypes = {
  source: PropTypes.object.isRequired,
};

export default FastImage;
