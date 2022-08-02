import {
  useNavigation,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useLayoutEffect, useState } from 'react';
import HeaderRight from '../components/HeaderRight';
import ImagePicker from '../components/ImagePicker';

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const stateRoutes = useNavigationState((state) => state.routes);

  const { params } = useRoute();

  const maxCount = params?.maxCount ?? 1;
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const onSelect = useCallback(() => {
    const prevScreenName = stateRoutes[stateRoutes.length - 2].name;
    navigation.navigate(prevScreenName, { selectedPhotos });
  }, [navigation, selectedPhotos, stateRoutes]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderRight disabled={selectedPhotos.length < 1} onPress={onSelect} />
      ),
    });
  }, [navigation, onSelect, selectedPhotos.length]);

  const isSelectedPhoto = (photo) => {
    return selectedPhotos.findIndex((item) => item.id === photo.id) > -1;
  };

  const togglePhoto = (photo) => {
    const isSelected = isSelectedPhoto(photo);
    setSelectedPhotos((prev) => {
      if (isSelected) {
        return prev.filter((item) => item.id !== photo.id);
      }

      if (maxCount > prev?.length) {
        return [...prev, photo];
      }

      return prev;
    });
  };

  return (
    <ImagePicker togglePhoto={togglePhoto} isSelectedPhoto={isSelectedPhoto} />
  );
};

export default ImagePickerScreen;
