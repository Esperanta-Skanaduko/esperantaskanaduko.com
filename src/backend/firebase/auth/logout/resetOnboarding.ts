import mobileStorage from '../../../database/mobile/mobileStorage';
import { StoragePaths } from '../../../database/mobile/storage/storagePaths';

const ResetOnboarding = (): void => {
  mobileStorage.remove(StoragePaths.user);
};

export default ResetOnboarding;
