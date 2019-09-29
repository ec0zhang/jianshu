
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1565160003055'); /* IE9 */
  src: url('./iconfont.eot?t=1565160003055#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQYAAsAAAAACFwAAAPKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqDdINNATYCJAMUCwwABCAFhG0HUBthB8gOJSHBwABgoABgPDzt1/7cmXkrs4gnSardo0mIJBKURIJGixA6icz/XgL//3vWTTJMx8hKA7NYqHhpU6UneQvIxfqL/sqc04PLccs22Dx7y+n/G5PWGFg0AKMJFNgYiwskTAdIiXLD2E0EDfE4gWpaX8RRVYMcfBRgXCDuOb0afDJqpSE3dIRWxdIiXsBTJz2R9wE888/Hf0gLH5ImA1PP7yp1UPIr4lMrNdk92WCqhfnTGWGsImMFKMRDpfkeFYVXUKr3Ow97QNWRpF8RH7I+hn1qdbvxJQdSVfiHR5ElQbSA7D6wp8jLxQkxniizZITM7zCExJ9W0bMc1YCKLl4BfAGgTrpFkhQxHBwR7OMzLksYJb/gALtdTsgVhMulmuJUKtMpkx2tqotOuxjG3F5zEU6nsmK2w6GY52pWrJi3agq7POy8ndbRelR+lMn2QPrWT06bZAMGrkyg10f1V5+TzQOoUd/puQ+JKSrVFHpugeL4bpi8RzbvGkHcbPyqXbG57/mWluUnVCvs8uWrM3c56K52uf151PLb0vkBA94ki6XkrOPHZ5Elk8BLJRc8Ojo8Lgwq3yJNzVS7O02D/PdYSTqcOr6aWvfw0XrCoh49Yq5/9PCK6vGpMklSBN0PSkh41LHT0rt4LnnqNDWXmqPL5urPevo0Oae4twUus9VPelY8QQFuTbnTWNSsIMs0XJHLQyoS8Y2cZMJzP4nvpeT8h8jqS/LeDVXhe9HhUky3390SoPJ42vSL/z8Hdb1eozsjPyik5jQsmhfHeER5jSQNQ3WPB42Mwj1OJFd06wU5AN9XM5RVcY47X6Ygiqlz1OS//h0fuKpgWGDBfx9ZAZ+2ZeWy8xt7QDcF/DqlzsJ/LOxYUXwx0DTFLcW4a2lspNSS11DxZ+0j3k5jHQeJMXRMoQxJ2xRkHTOEQlmBRs8OtHTsQrWsenXPKAElShdLZkgQhhyCZMAbZEMeEArlDTQmfIeWoaCguo3QLXvmgqPLBaTGSMdoxjCclreySIdpkduG9CPMaiEt5mwlEkTOx6QmpeRj1ciKhClmiCP1aRizDCvwFqZKOg2ZzTxjE3gj0uIkA8a2vORktupOSVreArRDAkQNQ3QYGmMwOFo8K5bWx+jC+9sgeiOYqQkNZT1BJUQg4rpnpEqS0oFQrbB2KruV3qKR9NJgGKuOYgl4Fowq2YiYYZjHsFUPMkK0sCSGAUGbPMlKLbarIml5leUdd0AF9mgiRY4STbSURxtnDTr//fvZzCPEfiJSC1oDWar2HjPCouY1HAAAAA==') format('woff2'),
  url('./iconfont.woff?t=1565160003055') format('woff'),
  url('./iconfont.ttf?t=1565160003055') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1565160003055#iconfont') format('svg'); /* iOS 4.1- */,
  
  src: url('iconfont.eot?t=1569748236940'); !* IE9 *!
  src: url('iconfont.eot?t=1569748236940#iefix') format('embedded-opentype'), !* IE6-IE8 *!
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1569748236940') format('woff'),*/
  url('iconfont.ttf?t=1569748236940') format('truetype'), !* chrome, firefox, opera, Safari, Android, iOS 4.2+ *!
  url('iconfont.svg?t=1569748236940#iconfont') format('svg'); !* iOS 4.1- *!
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;