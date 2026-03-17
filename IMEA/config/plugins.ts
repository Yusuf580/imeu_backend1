// config/plugins.ts
import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams) => {
  return {
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          credentials: {
            accessKeyId: env('DO_SPACE_ACCESS_KEY'),
            secretAccessKey: env('DO_SPACE_SECRET_KEY'),
          },
          endpoint: env('DO_SPACE_ENDPOINT'),
          region: env('DO_SPACE_REGION'),
          params: {
            Bucket: env('DO_SPACE_BUCKET'),
          },
          forcePathStyle: false,
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  };
};

export default config;