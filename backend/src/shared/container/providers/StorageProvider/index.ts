import { container } from 'tsyringe';

import IStorageProvier from './models/IStorageProvider';

import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  disk: DiskStorageProvider,
};

container.registerSingleton<IStorageProvier>('StorageProvider', providers.disk);
