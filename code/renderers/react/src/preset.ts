import type { PresetProperty, PresetPropertyFn, StorybookConfig } from '@storybook/types';

export const addons: PresetProperty<'addons', StorybookConfig> = [
  require.resolve('@storybook/react-dom-shim/dist/preset'),
];

export const swc: PresetPropertyFn<'swc', StorybookConfig> = (config, { configType }) => {
  const isDevelopment = configType !== 'PRODUCTION';

  return {
    ...config,
    jsc: {
      ...(config?.jsc ?? {}),
      transform: {
        ...(config?.jsc?.transform ?? {}),
        react: {
          ...(config?.jsc?.transform?.react ?? {}),
          development: isDevelopment,
          refresh: isDevelopment,
        },
      },
    },
  };
};
