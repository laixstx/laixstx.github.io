import { IBundleOptions } from 'father'

// @ts-ignore
// @ts-ignore
// @ts-ignore
const options: IBundleOptions = {
    file: 'beast',
    esm: {
        type: 'rollup'
    },
    cjs: 'rollup',
    // doc: {
    //     // themeConfig: { mode: 'dark' },
    //     // base: '/beast'
    // },
    pkgs: [
        'beast-utils',
        'beast-lib',
    ],
    // 是否把 helper 方法提取到 @babel/runtime 里。只对 esm 有效。官网：https://babeljs.io/docs/en/babel-runtime
    runtimeHelpers: true
};

export default options;