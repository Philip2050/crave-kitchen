declare module 'next-pwa' {
  import { NextConfig } from 'next';

  interface PWAConfig {
    dest?: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    sw?: string;
    cacheOnFrontEndNav?: boolean;
    reloadOnOnline?: boolean;
    swcMinify?: boolean;
    [key: string]: any;
  }

  interface WithPWAOptions extends PWAConfig {}

  function withPWA(options?: WithPWAOptions): (config: NextConfig) => NextConfig;

  export = withPWA;
}