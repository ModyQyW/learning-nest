import common from './common';
import development from './development';
import staging from './staging';
import production from './production';
import test from './test';

const map: Record<string, any> = {
  development,
  staging,
  production,
  test,
};

export default () => ({
  ...common,
  ...map[process.env.MODE || 'development'],
});
